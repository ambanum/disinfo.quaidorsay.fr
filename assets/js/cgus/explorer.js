import 'regenerator-runtime/runtime'
import DiffMatchPatch from 'diff-match-patch';
import {
	Nanostache
} from '@solid-js/nanostache'

document.addEventListener("DOMContentLoaded", () => {

	if (window.fetch) {
		init();
	} else {
		showNotification('error', notificationsMsgs.browserSupport);
	}

	const requestHeaders = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	async function async_fetch(url) {
		const response = await fetch(url)
		if (response.ok) return response.json()
		throw new Error(response.status)
	}

	async function init() {
		getServices()
			.then(data => {
				populate(data)
			})
			.then(() => {
				maxInputDateNow()
				listenSubmit()
			})
	}

	async function getServices() {
		console.log('getServices')
		const request = new Request('https://disinfo.quaidorsay.fr/api/cgus/list_services/v1/', requestHeaders);
		return async_fetch(request);
	}

	function populate(services) {
		console.log('populate', services);
		const $form_services = document.getElementById('form_services');
		for (const [key, value] of Object.entries(services)) {
			const option = new Option(key, key);
			option.dataset.typeofdocuments = value;
			$form_services.add(option);
		}
		$form_services && $form_services.addEventListener('change', onSelectService);
		onSelectService();
	}

	function onSelectService(event) {
		console.log('onSelectService');
		const $form_services = document.getElementById('form_services');
		const $form_typeofdocuments = document.getElementById('form_typeofdocuments');
		$form_typeofdocuments.innerHTML = '';
		const typesofdocuments = $form_services.selectedOptions.item(0).dataset.typeofdocuments.split(',');
		typesofdocuments && typesofdocuments.forEach(type => {
			$form_typeofdocuments.add(new Option(type, type));
		});
	}

	function listenSubmit() {
		console.log('listenSubmit')
		const $form_explorer = document.getElementById('form_explorer');
		$form_explorer && $form_explorer.addEventListener('submit', (event) => {
			event.preventDefault();
			const formData = new FormData(event.target);
			const service = formData.get('form_services');
			const type = formData.get('form_typeofdocuments');
			const firstDocumentDate = formData.get('form_firstdocumentdate');
			const secondDocumentDate = formData.get('form_seconddocumentdate');
			loadDocs(service, type, firstDocumentDate, secondDocumentDate)
				.then((docs, firstDocumentDate, secondDocumentDate) => {
					showDatesInfos(docs)
					showDiff(docs)
				})
		})
	}

	async function loadDocs(service, type, firstDocumentDate, secondDocumentDate) {
		console.log('loadDocs', service, type, firstDocumentDate, secondDocumentDate);
		const doc1 = await getDoc(service, type, firstDocumentDate);
		const doc2 = await getDoc(service, type, secondDocumentDate);
		return Array(doc1, doc2);
	}

	async function getDoc(service, type, date) {
		console.log('getDoc', service, type, date)
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
		console.log('showDatesInfos', docs);
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
		console.log('diff', docs);
		const dmp = new DiffMatchPatch();
		const diff = dmp.diff_main(docs[0].data, docs[1].data);
		const diffPrettyHtml = prettyHTMLDiff(diff);
		const $diffviewer = document.getElementsByClassName('diffviewer_content')[0];
		console.log($diffviewer);
		if ($diffviewer) $diffviewer.innerHTML = diffPrettyHtml;
	}

	function showNotification(type, msg) {
		removeNotification();
		console.log('notification', type, msg);
		const $notification = document.createElement('DIV');
		$notification.classList.add('notification');
		$notification.classList.add('notification-' + type);
		const $notification_content = document.createElement('DIV');
		$notification_content.classList.add('notification_content');
		$notification_content.innerText = msg;
		$notification.append($notification_content);
		const $form_explorer = document.getElementById('form_explorer');
		if ($form_explorer)
			insertAfter($notification, $form_explorer)
	}

	function removeNotification() {
		console.log('removeNotification');
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

	function maxInputDateNow() {
		console.log('maxInputDateNow');
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

	//1 - initialiser le formulaire avec les paramètres passés en url

	//2 - le cas échéant afficher les documents demandés

	//3 - écouter les changement sur le formulaire

	//4 - écouter les changement sur le submit du formulaire

	//5 - modifier les paramètres en url

});