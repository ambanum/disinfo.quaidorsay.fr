import 'regenerator-runtime/runtime'
import DiffMatchPatch from 'diff-match-patch';

document.addEventListener("DOMContentLoaded", () => {

	if (window.fetch) {
		init();
	} else {
		notification('error', 'Your browser is not supported 😥');
	}

	const requestHeaders = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	async function async_fetch(url) {
		let response = await fetch(url)
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
		let request = new Request('https://disinfo.quaidorsay.fr/api/cgus/list_services/v1/', requestHeaders);
		return async_fetch(request);
	}

	function populate(services) {
		console.log('populate', services);
		let $form_services = document.getElementById('form_services');
		let $form_typeofdocuments = document.getElementById('form_typeofdocuments');
		for (const [key, value] of Object.entries(services)) {
			let option = new Option(key, key);
			option.dataset.typeofdocuments = value;
			$form_services.add(option);
		}
		$form_services && $form_services.addEventListener('change', (event) => {
			$form_typeofdocuments.innerHTML = '';
			let typesofdocuments = event.target.selectedOptions.item(0).dataset.typeofdocuments.split(',');
			typesofdocuments && typesofdocuments.forEach(type => {
				$form_typeofdocuments.add(new Option(type, type));
			});
		})
	}
	

	function listenSubmit() {
		console.log('listenSubmit')
		const $form_explorer = document.getElementById('form_explorer');
		$form_explorer && $form_explorer.addEventListener('submit', (event) => {
			event.preventDefault();
			let formData           = new FormData(event.target);
			let service            = formData.get('form_services');
			let type               = formData.get('form_typeofdocuments');
			let firstDocumentDate  = formData.get('form_firstdocumentdate');
			let secondDocumentDate = formData.get('form_seconddocumentdate');
			loadDocs(service, type, firstDocumentDate, secondDocumentDate)
				.then((docs, firstDocumentDate, secondDocumentDate) => {
					showDatesInfos(docs)
					showDiff(docs)
				})
		})
	}

	async function loadDocs(service, type, firstDocumentDate, secondDocumentDate) {
		console.log('loadDocs', service, type, firstDocumentDate, secondDocumentDate);
		let doc1 = await getDoc(service, type, firstDocumentDate);
		let doc2 = await getDoc(service, type, secondDocumentDate);
		return Array(doc1, doc2);
	}

	async function getDoc(service, type, date) {
		console.log('getDoc', service, type, date)
		let route = encodeURI('https://disinfo.quaidorsay.fr/api/cgus/get_version_at_date/v1/' + service + '/' + type + '/' + date);
		let request = new Request(route, requestHeaders);
		let response = await fetch(request)
		if (response.ok){
			let data = await response.json()	
			if (data.error) throw new Error(data.error)
			if (data.data == ''){
				return await getDoc(service, type, data.next_version.substr(0, 10))
			}
			else return data; 
		} else{
			throw new Error(response.status)
		} 
	}

	function showDatesInfos(docs){
		console.log('showDatesInfos', docs);
		let $form_explorer = document.getElementById('form_explorer');
		let formData = new FormData($form_explorer);
		let firstDocumentDate  = formData.get('form_firstdocumentdate');
		let secondDocumentDate = formData.get('form_seconddocumentdate');
		let firstDocumentVersionAtDate = docs[0].version_at_date.substr(0, 10);
		let secondDocumentVersionAtDate = docs[1].version_at_date.substr(0, 10);
		let msg = `For the requested date ${firstDocumentDate}, the closest version is dated ${firstDocumentVersionAtDate} and for the requested date ${secondDocumentDate} the closest version is dated ${secondDocumentVersionAtDate}`;
		notification('info', msg)
	}

	async function showDiff(docs) {
		console.log('diff', docs);
		const dmp = new DiffMatchPatch();
		let diff = dmp.diff_main(docs[0].data, docs[1].data);
		let diffPrettyHtml = prettyHTMLDiff(diff);
		let $diffviewer = document.getElementsByClassName('diffviewer_content')[0];
		console.log($diffviewer);
		if ($diffviewer) $diffviewer.innerHTML = diffPrettyHtml;
	}

	/* Show notification message */
	function notification(type, msg) {
		console.log('notification', type, msg);
		let $notification = document.getElementsByClassName('notification')[0];
		let $notification_content = document.getElementsByClassName('notification_content')[0];
		$notification_content.innerText = msg;
		$notification.classList.toggle('notification-' + type);
	}

	function prettyHTMLDiff(diff){
		var DIFF_DELETE = -1;
		var DIFF_INSERT = 1;
		var DIFF_EQUAL = 0;
		var html = [];
		var pattern_amp = /&/g;
		var pattern_lt = /</g;
		var pattern_gt = />/g;
		var pattern_para = /\n/g;
		for (var x = 0; x < diff.length; x++) {
			var op = diff[x][0];    // Operation (insert, delete, equal)
			var data = diff[x][1];  // Text of change.
			var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
				.replace(pattern_gt, '&gt;').replace(pattern_para, '<br>');
			switch (op) {
			case DIFF_INSERT:
				html[x] = '<ins>' + text + '</ins>';
				break;
			case DIFF_DELETE:
				html[x] = '<del>' + text + '</del>';
				break;
			case DIFF_EQUAL:
				html[x] = '<span>' + text + '</span>';
				break;
			}
		}
		return html.join('');
	}

	function maxInputDateNow(){
		console.log('maxInputDateNow');
		let $inputDates = document.querySelectorAll('input[type=date]');
		$inputDates.forEach($inputDate => {
			$inputDate.setAttribute('max',new Date().toISOString().split("T")[0]);
		});
	}

	//1 - initialiser le formulaire avec les paramètres passés en url

	//2 - le cas échéant afficher les documents demandés

	//3 - écouter les changement sur le formulaire

	//4 - écouter les changement sur le submit du formulaire

	//5 - modifier les paramètres en url

});