document.addEventListener("DOMContentLoaded", function() {
	let x_label = document.getElementById('char_x_label').dataset.label;
	let y_label = document.getElementById('char_y_label').dataset.label;
	let chart = c3.generate({
		bindto: '#cguschart',
		data: {
			url: '/assets/js/open-terms-archive/data.json',
			mimeType: 'json',
			keys: {
				value: ['proportion_active'],
				x: 'start_time'
			}
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%m/%Y'
				},
				label: {
					text: x_label,
					position: 'outer-center'
				}
			},
			y: {
				label: {
					text: y_label,
					position: 'outer-middle'
				}
			}
		},
		tooltip: {
			format: {
				title: function (x, index) { return '' },
			}
		},
		legend: {
			show: false
		}
	});
});