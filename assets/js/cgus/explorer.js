import 'regenerator-runtime/runtime'
import 'diff/dist/diff'

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
				listenSubmit()
			})
	}

	async function getServices() {
		console.log('getServices')
		let request = new Request('https://disinfo.quaidorsay.fr/api/cgus/list_services/v1/', requestHeaders);
		return async_fetch(request);
	}

	function populate(services) {
		console.log('populate',services);
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
			let firstdocumentdate  = formData.get('form_firstdocumentdate');
			let seconddocumentdate = formData.get('form_seconddocumentdate');
			loadDocs(service, type, firstdocumentdate, seconddocumentdate)
				.then(docs => {
					console.log(docs)
					//diff(docs)
				})
				.catch(err => {
					notification("error", err)
				});
		})
	}

	async function loadDocs(service, type, firstdocumentdate, seconddocumentdate) {
		console.log('loadDocs', service, type, firstdocumentdate, seconddocumentdate);
		let doc1 = await getDoc(service, type, firstdocumentdate);
		let doc2 = await getDoc(service, type, seconddocumentdate);
		return Array[doc1, doc2];

		/* if (doc.error) throw new Error(doc.error)
		if (doc.data == '') await getDoc(service, type, doc.next_version.substr(0, 10)); */
	}

	async function getDoc(service, type, date) {
		console.log('getDoc', service, type, date)
		let route = encodeURI('https://disinfo.quaidorsay.fr/api/cgus/get_version_at_date/v1/' + service + '/' + type + '/' + date);
		let request = new Request(route, requestHeaders);
		return async_fetch(request); 
	}

	function diff(docs) {
		console.log('diff', docs);
		docs.forEach(doc => {
			console.log(this);
			let $doc1 = document.getElementById('doc1');
			$doc1.innerText = doc.data;
		});
	}

	/* Show notification message */
	function notification(type, msg) {
		const $notification = document.getElementsByClassName('notification')[0];
		const $notification_content = document.getElementsByClassName('notification_content')[0];
		$notification_content.innerText = msg;
		$notification.classList.toggle('notification-' + type);
	}

	//1 - initialiser le formulaire avec les paramètres passés en url

	//2 - le cas échéant afficher les documents demandés

	//3 - écouter les changement sur le formulaire

	//4 - écouter les changement sur le submit du formulaire

	//5 - modifier les paramètres en url

});