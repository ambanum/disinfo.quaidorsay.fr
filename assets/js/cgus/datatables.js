document.addEventListener("DOMContentLoaded", function() {

	//CGUs Datatables
	document.querySelectorAll('.datatables-cgus').forEach(function(el){
		let datatable = new simpleDatatables.DataTable(el, {
			searchable: false,
			perPage: 12,
			perPageSelect: false,
			labels: {
				info: infoLabel
			}
		});
	});
});