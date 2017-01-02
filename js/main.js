$(document).ready(function(){
	$('#element .time').timepicker({
		'showDuration': true,
		'timeFormat': 'g:i a',
		'step': 15
	});

	var timeRangeContainer = document.getElementById('element');
	var timeRange = new Datepair(timeRangeContainer);
});