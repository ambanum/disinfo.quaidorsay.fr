import 'regenerator-runtime/runtime';
import 'better-dom/dist/better-dom';
import 'better-dateinput-polyfill/dist/better-dateinput-polyfill';

import DiffMatchPatch from 'diff-match-patch';
import { Nanostache } from '@solid-js/nanostache';

const requestHeaders = {
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}

const APIBaseURL = 'https://api.opentermsarchive.org/data/api';

document.addEventListener("DOMContentLoaded", () => {

	const $form_explorer = document.getElementById('form_explorer');
	const $form_services = document.getElementById('form_services');
	const $form_typeofdocuments = document.getElementById('form_typeofdocuments');
	const $form_firstdocumentdate = document.getElementById('form_firstdocumentdate');
	const $form_seconddocumentdate = document.getElementById('form_seconddocumentdate');
	const $inputDates = document.querySelectorAll('input[type=date]');
	const $datasetVersion = document.getElementsByClassName("datasetRelease");

	if (window.fetch) {
		init();
	} else {
		showNotification('error', notificationsMsgs.browserSupport);
	}

	async function init() {
		getServices()
			.then(data => {

				//Init form control and listen form change
				setMaxInputDateToNow()
				initFormEventListener()

				//Populate form with data
				populateServices(data)
				populateTypeOfDocuments()

				//If no query string asked in URL
				//Select default service and documents
				const queryStringData = getQueryStringData();
				if (Object.keys(queryStringData).length === 0) {
					addInURL('service', $form_services.selectedOptions.item(0).value);
					addInURL('typeofdocument', $form_typeofdocuments.selectedOptions.item(0).value)
				}

				//Update form with current state
				window.addEventListener("popstate", popStateHandler)
				popStateHandler()
			}).catch(error => {
				showNotification('error', error);
			  });
		getDatasetVersion()
			.then(data => {
				const { lang, text } = releaseMsgs;
				const translatedDate = new Date(data.dataset_date).toLocaleDateString(lang,{ year: 'numeric', month: 'long', day: 'numeric' })
				$datasetVersion[0].innerHTML = text.replace('{{releaseUrl}}', data.dataset_url).replace("{{releaseDate}}", translatedDate);
			}).catch(error => {
				showNotification('error', error);
			  });
	}

	async function async_fetch(url) {
		const response = await fetch(url)
		if (!response.ok) { 
			showNotification('error', response.status);
			return 
		}
		return response.json()
	}

	async function getServices() {
		const request = new Request(APIBaseURL + '/list_services/v1/?multiple_versions_only=true', requestHeaders);
		return async_fetch(request);
	}

	async function getDatasetVersion() {
		const request = new Request(APIBaseURL + '/version', requestHeaders);
		return async_fetch(request);
	}

	async function loadDocs() {
		const formData = getFormData();
		const doc1 = await getDoc(formData.service, formData.type, formData.firstDocumentDate);
		const doc2 = await getDoc(formData.service, formData.type, formData.secondDocumentDate);
		return Array(doc1, doc2);
	}

	async function getDoc(service, type, date) {
		const route = encodeURI(APIBaseURL + '/get_version_at_date/v1/' + service + '/' + type + '/' + date);
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

	function initFormEventListener() {
		$form_explorer && $form_explorer.addEventListener('submit', submitHandler);
		$form_services && $form_services.addEventListener('change', onServiceChangeHandler);
		$form_typeofdocuments && $form_typeofdocuments.addEventListener('change', onTypeOfDocumentChangeHandler);
		$form_firstdocumentdate && $form_firstdocumentdate.addEventListener('change', onDateChange);
		$form_seconddocumentdate && $form_seconddocumentdate.addEventListener('change', onDateChange);
	}

	function populateServices(services) {
		const servicesArray = Object.entries(services);
		const sortedServices = sortAlphabeticallyServices(servicesArray);
		sortedServices && sortedServices.forEach(element => {
			const option = new Option(element[0], element[0]);
			option.classList.add('font-marianne');
			option.dataset.typeofdocuments = sortAlphabeticallyTypeOfDocuments(element[1]);
			$form_services.add(option);
		});
	}

	function populateTypeOfDocuments() {
		$form_typeofdocuments.innerHTML = '';
		const typesofdocuments = $form_services.selectedOptions.item(0).dataset.typeofdocuments.split(',');
		if (typesofdocuments) {
			const sortedTypeOfDocuments = sortAlphabeticallyTypeOfDocuments(typesofdocuments);
			sortedTypeOfDocuments && sortedTypeOfDocuments.forEach(type => {
				$form_typeofdocuments.add(new Option(type, type));
			});
		}
	}

	function popStateHandler(event) {
		const queryStringData = getQueryStringData();
		removeDiff();
		removeLegend();
		removeNotification();
		updateFormValues();

		//If action submit asked
		if (queryStringData.action == "submit") {

			//https://stackoverflow.com/questions/49587933/firefox-doesnt-preventing-dispatched-submit-event
			$form_explorer.dispatchEvent(new Event('submit', {
				cancelable: true
			}));
		}
	}

	function getQueryStringData() {
		const urlParams = new URLSearchParams(window.location.search);
		const queryStringData = Object.fromEntries(urlParams);
		return queryStringData;
	}

	function updateFormValues() {
		const queryStringData = getQueryStringData();

		let errogMsg = '';

		//Update service
		if (queryStringData.service) {
			if ($form_services) {
				const option = isSelectOptionExist($form_services, queryStringData.service);
				if (option) {
					option.setAttribute('selected', 'selected');
					populateTypeOfDocuments();
				} else {
					errogMsg = errogMsg.concat('This service is not available');
				}
			}
		}

		//Update type of document
		if (queryStringData.typeofdocument) {
			if ($form_typeofdocuments) {
				const option = isSelectOptionExist($form_typeofdocuments, queryStringData.typeofdocument);
				if (option) {
					option.setAttribute('selected', 'selected');
				} else {
					console.log('Type of document is not valid for this service')
				}
			}
		}

		//Update date1
		if (queryStringData.date1) {
			if ($form_firstdocumentdate) {
				$form_firstdocumentdate.value = queryStringData.date1;
			}
		}

		//Update date2
		if (queryStringData.date2) {
			if ($form_seconddocumentdate) {
				$form_seconddocumentdate.value = queryStringData.date2;
			}
		}

		//If error msg to display
		if (errogMsg != '') showNotification('error', errogMsg);
	}

	function isSelectOptionExist($target, value) {
		return $target.querySelector('[value="' + value + '"]');
	}

	function addInURL(key, value) {
		const queryStringData = getQueryStringData();
		const url = new URL(window.location);
		if ((url.searchParams.get(key) != null || url.searchParams.get(key) != value) || Object.keys(queryStringData).length == 0) {
			url.searchParams.set(key, value);
			window.history.pushState({}, '', url);
			window.dispatchEvent(new Event('popstate'));
		}
	}

	function removeInURL(key) {
		const url = new URL(window.location);
		url.searchParams.delete(key);
		window.history.pushState({}, '', url);
		window.dispatchEvent(new Event('popstate'));
	}

	function onServiceChangeHandler(event) {
		populateTypeOfDocuments();
		addInURL('service', $form_services.selectedOptions.item(0).value);
		onTypeOfDocumentChangeHandler()
	}

	function onTypeOfDocumentChangeHandler(event) {
		addInURL('typeofdocument', $form_typeofdocuments.selectedOptions.item(0).value);
	}

	function sortAlphabeticallyTypeOfDocuments(types) {
		return types.sort((a, b) => {
			return (a < b) ? -1 : (a > b) ? 1 : 0;
		})
	}

	function sortAlphabeticallyServices(services) {
		return services.sort((a, b) => {
			return (a[0] < b[0]) ? -1 : (a[0] > b[0]) ? 1 : 0;
		})
	}

	function onDateChange(event) {
		const currentDateKey = (event.target.id == 'form_firstdocumentdate') ? 'date1' : 'date2';
		addInURL(currentDateKey, event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();
		const formData = getFormData();
		if (isValidForm()) {
			loadDocs()
				.then((docs) => {
					showDiff(docs)
					showLegend()
					showDatesInfos(docs)
				})
		}
	}

	function getFormData() {
		const formData = new FormData($form_explorer);
		const service = formData.get('form_services');
		const type = formData.get('form_typeofdocuments');
		const firstDocumentDate = formData.get('form_firstdocumentdate');
		const secondDocumentDate = formData.get('form_seconddocumentdate');
		return {
			service: service,
			type: type,
			firstDocumentDate: firstDocumentDate,
			secondDocumentDate: secondDocumentDate,
		};
	}

	function isValidForm() {
		const formData = getFormData();
		if (formData.service && formData.type && formData.firstDocumentDate && formData.secondDocumentDate) return true;
		return false;
	}

	function showDatesInfos(docs) {
		const formData = getFormData();
		const firstDocumentDate = dateToDMY(formData.firstDocumentDate);
		const secondDocumentDate = dateToDMY(formData.secondDocumentDate);
		const firstDocumentVersionAtDate = dateToDMY(docs[0].version_at_date.substr(0, 10));
		const secondDocumentVersionAtDate = dateToDMY(docs[1].version_at_date.substr(0, 10));

		let msg = Nanostache(notificationsMsgs.dateClosest, {
			firstDocumentDate: firstDocumentDate,
			secondDocumentDate: secondDocumentDate,
			firstDocumentVersionAtDate: firstDocumentVersionAtDate,
			secondDocumentVersionAtDate: secondDocumentVersionAtDate,
			Date,
		});

		//If dates are the equals
		if (docs[0].version_at_date == docs[1].version_at_date) {
			msg = Nanostache(notificationsMsgs.nothingToCompare, {
				onlyDocumentDate: firstDocumentDate,
			});;
		}

		showNotification('info', msg)
	}

	async function showDiff(docs) {
		const dmp = new DiffMatchPatch();
		const diff = dmp.diff_main(docs[0].data, docs[1].data);
		const diffPrettyHtml = prettyHTMLDiff(diff);
		const $diffContent = document.createElement('DIV');
		$diffContent.classList.add('diffviewer_content');
		$diffContent.innerHTML = diffPrettyHtml;
		const $diffviewer = document.createElement('DIV');
		$diffviewer.classList.add('diffviewer');
		$diffviewer.append($diffContent);
		if ($form_explorer) insertAfter($diffviewer, $form_explorer)
	}

	function showLegend() {
		removeLegend()
		const $legend = document.createElement('DIV');
		$legend.classList.add('legend');
		const $legend_item1 = document.createElement('DIV');
		const $legend_item2 = document.createElement('DIV');
		$legend_item1.classList.add('legend_item');
		$legend_item2.classList.add('legend_item');
		$legend_item1.innerHTML = legendMsg.add;
		$legend_item2.innerHTML = legendMsg.remove;
		$legend.append($legend_item1);
		$legend.append($legend_item2);
		if ($form_explorer) insertAfter($legend, $form_explorer)
	}

	function removeLegend() {
		[...document.getElementsByClassName("legend")].map(n => n && n.remove());
	}

	function removeDiff() {
		[...document.getElementsByClassName("diffviewer")].map(n => n && n.remove());
	}

	function showNotification(type, msg) {
		removeNotification();
		const $notification = document.createElement('DIV');
		$notification.classList.add('notification');
		$notification.classList.add('notification-' + type);
		const $notification_content = document.createElement('DIV');
		$notification_content.classList.add('notification_content');
		$notification_content.innerHTML = msg;
		$notification.append($notification_content);
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
