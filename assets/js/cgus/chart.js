document.addEventListener("DOMContentLoaded", function() {
	let chart = c3.generate({
		bindto: '#cguschart',
		data: {
			url: '/assets/js/cgus/data.json',
			mimeType: 'json',
			xFormat: '%Y-%m-%d %H:%M:%S%Z',
			keys: {
				value: ['readability'],
				x: 'date'
			}
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					values: [
						"2020-07-01 13:30:18+00:00",
						"2020-08-01 13:30:18+00:00",
						"2020-09-01 13:30:18+00:00",
						"2020-10-01 13:30:18+00:00",
						"2020-11-01 13:30:18+00:00",
						"2020-12-01 13:30:18+00:00"
					],
					format: '%Y-%m-%d',
					rotate: 0
				}
			}
		},
		legend: {
			item: {
				onclick: function (id) {}
			}
		}
	});
});