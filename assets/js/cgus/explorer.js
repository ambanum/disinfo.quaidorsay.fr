document.addEventListener("DOMContentLoaded", function () {

	if (window.fetch) {
		init();
	} else {
		notification('error', 'Your browser is not supported 😥');
	}

	async function init() {
		populate();
		submit();
	}

	/* Show notification message */
	function notification(type, msg) {
		const $notification = document.getElementsByClassName('notification')[0];
		const $notification_content = document.getElementsByClassName('notification_content')[0];
		$notification_content.innerText = msg;
		$notification.classList.toggle('notification-' + type);
	}

	async function get(route) {
		let myRequest = new Request(route, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});

		return fetch(myRequest)
			.then(response => response.json())
			.catch(err => {
				throw new Error(err)
			});
	}

	async function populate() {
		get('https://disinfo.quaidorsay.fr/api/cgus/list_services/v1/')
			.then(services => {
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
				});
			}).catch(err => notification("error", 'Request Failed' + err));
	}

	function submit() {
		const $form_explorer = document.getElementById('form_explorer');
		$form_explorer && $form_explorer.addEventListener('submit', (event) => {
			let formData = new FormData(event.target);
			let service = formData.get('form_services');
			let type = formData.get('form_typeofdocuments');
			let firstdocumentdate = formData.get('form_firstdocumentdate');
			let seconddocumentdate = formData.get('form_seconddocumentdate');
			let dates = [];
			if (firstdocumentdate != '') dates.push(firstdocumentdate);
			if (seconddocumentdate != '') dates.push(seconddocumentdate);
			getDocs(service, type, dates);
			event.preventDefault();
		})
	}

	async function getDocs(service, type, dates){
		Promise.all(dates.map(async (date) => {
			if(date != ''){
				let route = encodeURI('https://disinfo.quaidorsay.fr/api/cgus/get_version_at_date/v1/'+service+'/'+type+'/'+date);
				console.log(route);
				return get(route)
				.catch(err => notification("error", 'Request Failed ' + err, 'Route: '+route));
			}
		}))
		.then((docs) => viewDocs(docs));
	}

	function viewDocs(docs){
		docs.forEach(doc => {
			console.log(doc);
		});
	}

	//1 - initialiser le formulaire avec les paramètres passés en url

	//2 - le cas échéant afficher les documents demandés

	//3 - écouter les changement sur le formulaire

	//4 - écouter les changement sur le submit du formulaire

	//5 - modifier les paramètres en url

});