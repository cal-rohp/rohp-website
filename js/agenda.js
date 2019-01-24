$(document).ready(function(){

	$('#date1').click(function() {
		$('#night1').show();
		$('#night2').hide();
		$('#night3').hide();
		$('#night4').hide();
		$('#night5').hide();
		$('#night6').hide();
	});

	$('#date2').click(function() {
		$('#night1').hide();
		$('#night2').show();
		$('#night3').hide();
		$('#night4').hide();
		$('#night5').hide();
		$('#night6').hide();
	});

	$('#date3').click(function() {
		$('#night1').hide();
		$('#night2').hide();
		$('#night3').show();
		$('#night4').hide();
		$('#night5').hide();
		$('#night6').hide();
	});

	$('#date4').click(function() {
		$('#night1').hide();
		$('#night2').hide();
		$('#night3').hide();
		$('#night4').show();
		$('#night5').hide();
		$('#night6').hide();
	});

	$('#date5').click(function() {
		$('#night1').hide();
		$('#night2').hide();
		$('#night3').hide();
		$('#night4').hide();
		$('#night5').show();
		$('#night6').hide();
	});

	$('#date6').click(function() {
		$('#night1').hide();
		$('#night2').hide();
		$('#night3').hide();
		$('#night4').hide();
		$('#night5').hide();
		$('#night6').show();
	});
});
