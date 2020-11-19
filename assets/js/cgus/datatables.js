document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('.datatables').forEach(function(el){
		let datatable = new simpleDatatables.DataTable(el, {
			searchable: false,
			fixedHeight: true
		});
	});
});