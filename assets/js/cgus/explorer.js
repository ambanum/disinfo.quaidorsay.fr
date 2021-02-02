import 'regenerator-runtime/runtime'
import DiffMatchPatch from 'diff-match-patch';
import { Nanostache } from '@solid-js/nanostache';

const requestHeaders = {
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}

document.addEventListener("DOMContentLoaded", () => {

	if (window.fetch) {
		init();
	} else {
		showNotification('error', notificationsMsgs.browserSupport);
	}

	async function async_fetch(url) {
		const response = await fetch(url)
		if (response.ok) return response.json()
		throw new Error(response.status)
	}

	async function init() {
		console.log('init');
		getServices()
		.then(data => {
			populate(data)
		})
		.then(() => {
			setMaxInputDateToNow()
			formEventListener()
			window.addEventListener("popstate", popStateHandler)
			popStateHandler()
		})
	}

	function formEventListener(){
		console.log('formEventListener');
		const $form_explorer = document.getElementById('form_explorer');
		$form_explorer && $form_explorer.addEventListener('submit', submitHandler);
		const $form_services = document.getElementById('form_services');
		$form_services && $form_services.addEventListener('change', onServiceChangeHandler);
		onServiceChangeHandler($form_services);
		const $form_typeofdocuments = document.getElementById('form_typeofdocuments');
		form_typeofdocuments && $form_typeofdocuments.addEventListener('change', onTypeOfDocumentChange);
		const $form_firstdocumentdate = document.getElementById('form_firstdocumentdate');
		$form_firstdocumentdate && $form_firstdocumentdate.addEventListener('change', onDateChange);
		const $form_seconddocumentdate = document.getElementById('form_seconddocumentdate');
		$form_seconddocumentdate && $form_seconddocumentdate.addEventListener('change', onDateChange);
	}

	async function getServices() {
		const request = new Request('https://disinfo.quaidorsay.fr/api/cgus/list_services/v1/', requestHeaders);
		return async_fetch(request);
	}

	function populate(services) {
		const $form_services = document.getElementById('form_services');
		for (const [key, value] of Object.entries(services)) {
			const option = new Option(key, key);
			option.dataset.typeofdocuments = value;
			$form_services.add(option);
		}
	}

	function popStateHandler(event){
		console.log('popStateHandler', event, window.location.href);
		hideDiff();
		removeNotification();
		const urlParams = new URLSearchParams(window.location.search);
		const queryStringData = Object.fromEntries(urlParams);  
		updateFormValues(queryStringData);
		submitForm();
	}

	function submitForm(){
		console.log('submitForm');
		const $form_explorer = document.getElementById('form_explorer');
		$form_explorer.dispatchEvent(new Event('submit'));
	}

	function updateFormValues(queryStringData){
		console.log('updateFormValues', queryStringData);

		let errogMsg = '';

		//Update service
		if(queryStringData.service){
			const $form_services = document.getElementById('form_services');
			if($form_services){
				const option = isSelectOptionExist($form_services, queryStringData.service);
				if(option){
					option.setAttribute('selected','selected');
				}else{
					errogMsg = errogMsg.concat('Service is not valid');
				}
			}
		}

		//Update document
		if(queryStringData.typeofdocument){
			const $form_typeofdocuments = document.getElementById('form_typeofdocuments');
			if($form_typeofdocuments){
				const option = isSelectOptionExist($form_typeofdocuments, queryStringData.typeofdocument);
				if(option){
					option.setAttribute('selected','selected');
				}else{
					if(errogMsg != '') {
						errogMsg = errogMsg.concat('<br>');
					}
					errogMsg = errogMsg.concat('Type of document is not valid');
				}
			}
		}

		if(queryStringData.date1){
			const $form_firstdocumentdate = document.getElementById('form_firstdocumentdate');
			if($form_firstdocumentdate){
				$form_firstdocumentdate.value = queryStringData.date1;
			}
		}

		if(queryStringData.date2){
			const $form_seconddocumentdate = document.getElementById('form_seconddocumentdate');
			if($form_seconddocumentdate){
				$form_seconddocumentdate.value = queryStringData.date2;
			}
		}

		if(errogMsg != '') showNotification('error', errogMsg);
	}

	function isSelectOptionExist($target, value){
		return $target.querySelector('[value="' + value + '"]');
	}

	function isDateValid(){}

	function updateURL(key, value){
		console.log('updateURL', key, value)
		const url = new URL(window.location);
		url.searchParams.set(key, value);
		window.history.pushState({}, '', url);
		window.dispatchEvent(new Event('popstate'));
	}

	function onServiceChangeHandler(event) {
		const $form_services = document.getElementById('form_services');
		const $form_typeofdocuments = document.getElementById('form_typeofdocuments');
		console.log('$form_typeofdocuments.length',$form_typeofdocuments.length)
		$form_typeofdocuments.innerHTML = '';
		const typesofdocuments = $form_services.selectedOptions.item(0).dataset.typeofdocuments.split(',');
		typesofdocuments && typesofdocuments.forEach(type => {
			$form_typeofdocuments.add(new Option(type, type));
		});
		updateURL('service', $form_services.selectedOptions.item(0).value);
		onTypeOfDocumentChange({target:$form_typeofdocuments});
	}

	function onTypeOfDocumentChange(event){
		updateURL('typeofdocument', event.target.selectedOptions.item(0).value);
	}

	function onDateChange(event){
		const currentDateKey = (event.target.id == 'form_firstdocumentdate') ? 'date1' : 'date2';
		updateURL(currentDateKey, event.target.value);
	}

	function submitHandler(event) {
		console.log('submitHandler', event)
		event.preventDefault();
		const formData = new FormData(event.target);
		const service = formData.get('form_services');
		const type = formData.get('form_typeofdocuments');
		const firstDocumentDate = formData.get('form_firstdocumentdate');
		const secondDocumentDate = formData.get('form_seconddocumentdate');

		console.log('isValidForm ?',isValidForm(service, type, firstDocumentDate, secondDocumentDate))
		if(isValidForm(service, type, firstDocumentDate, secondDocumentDate)){
			loadDocs(service, type, firstDocumentDate, secondDocumentDate)
			.then((docs, firstDocumentDate, secondDocumentDate) => {
				showDatesInfos(docs)
				showDiff(docs)
			})
		}
	}
	
	function isValidForm(service, type, firstDocumentDate, secondDocumentDate){
		if(service && type && firstDocumentDate && secondDocumentDate) return true;
		return false;
	}

	async function loadDocs(service, type, firstDocumentDate, secondDocumentDate) {
		const doc1 = await getDoc(service, type, firstDocumentDate);
		const doc2 = await getDoc(service, type, secondDocumentDate);
		return Array(doc1, doc2);
	}

	async function getDoc(service, type, date) {
		const route = encodeURI('https://disinfo.quaidorsay.fr/api/cgus/get_version_at_date/v1/' + service + '/' + type + '/' + date);
		const request = new Request(route, requestHeaders);
		const response = await fetch(request)
		if (response.ok) {
			const data = await response.json()
			if (data.error) throw new Error(data.error)
			if (data.data == '') {
				return await getDoc(service, type, data.next_version.substr(0, 10))
			} else return data;
		} else {
			throw new Error(response.status)
		}
	}

	function showDatesInfos(docs) {
		const $form_explorer = document.getElementById('form_explorer');
		const formData = new FormData($form_explorer);
		const firstDocumentDate = dateToDMY(formData.get('form_firstdocumentdate'));
		const secondDocumentDate = dateToDMY(formData.get('form_seconddocumentdate'));
		const firstDocumentVersionAtDate = dateToDMY(docs[0].version_at_date.substr(0, 10));
		const secondDocumentVersionAtDate = dateToDMY(docs[1].version_at_date.substr(0, 10));
		let msg = Nanostache(notificationsMsgs.dateClosest, {
			firstDocumentDate: firstDocumentDate,
			secondDocumentDate: secondDocumentDate,
			firstDocumentVersionAtDate: firstDocumentVersionAtDate,
			secondDocumentVersionAtDate: secondDocumentVersionAtDate,
		});
		if (docs[0].version_at_date == docs[1].version_at_date)
			msg = notificationsMsgs.nothingToCompare;

		showNotification('info', msg)
	}

	async function showDiff(docs) {
		const dmp = new DiffMatchPatch();
		const diff = dmp.diff_main(docs[0].data, docs[1].data);
		const diffPrettyHtml = prettyHTMLDiff(diff);
		const $diffviewer = document.getElementsByClassName('diffviewer_content')[0];
		console.log($diffviewer);
		if ($diffviewer) $diffviewer.innerHTML = diffPrettyHtml;
	}

	function hideDiff(){
		const $diffviewer = document.getElementsByClassName('diffviewer_content')[0];
		if ($diffviewer) $diffviewer.innerHTML = '';
	}

	function showNotification(type, msg) {
		console.log('notification', type, msg);
		removeNotification();
		const $notification = document.createElement('DIV');
		$notification.classList.add('notification');
		$notification.classList.add('notification-' + type);
		const $notification_content = document.createElement('DIV');
		$notification_content.classList.add('notification_content');
		$notification_content.innerHTML = msg;
		$notification.append($notification_content);
		const $form_explorer = document.getElementById('form_explorer');
		if ($form_explorer) insertAfter($notification, $form_explorer)
	}

	function removeNotification() {
		[...document.getElementsByClassName("notification")].map(n => n && n.remove());
	}

	function insertAfter(el, referenceNode) {
		referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
	}

	function prettyHTMLDiff(diff) {
		var DIFF_DEconstE = -1;
		var DIFF_INSERT = 1;
		var DIFF_EQUAL = 0;
		var html = [];
		var pattern_amp = /&/g;
		var pattern_lt = /</g;
		var pattern_gt = />/g;
		var pattern_para = /\n/g;
		for (var x = 0; x < diff.length; x++) {
			var op = diff[x][0]; // Operation (insert, deconste, equal)
			var data = diff[x][1]; // Text of change.
			var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
				.replace(pattern_gt, '&gt;').replace(pattern_para, '<br>');
			switch (op) {
				case DIFF_INSERT:
					html[x] = '<ins>' + text + '</ins>';
					break;
				case DIFF_DEconstE:
					html[x] = '<del>' + text + '</del>';
					break;
				case DIFF_EQUAL:
					html[x] = '<span>' + text + '</span>';
					break;
			}
		}
		return html.join('');
	}

	function setMaxInputDateToNow() {
		const $inputDates = document.querySelectorAll('input[type=date]');
		$inputDates.forEach($inputDate => {
			$inputDate.setAttribute('max', new Date().toISOString().split("T")[0]);
		});
	}

	function dateToDMY(dateToFormat) {
		const date = new Date(dateToFormat);
		return date.toLocaleString('default', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	}
});