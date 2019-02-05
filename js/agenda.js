$(document).ready(function(){

	$('#date1').click(function() {
		$('#night1').fadeIn(300);
		$('#night2').hide();
		$('#night3').hide();
		$('#night4').hide();
		$('#night5').hide();
		$('#night6').hide();
	});

	$('#date2').click(function() {
		$('#night1').hide();
		$('#night2').fadeIn(300);
		$('#night3').hide();
		$('#night4').hide();
		$('#night5').hide();
		$('#night6').hide();
	});

	$('#date3').click(function() {
		$('#night1').hide();
		$('#night2').hide();
		$('#night3').fadeIn(300);
		$('#night4').hide();
		$('#night5').hide();
		$('#night6').hide();
	});

	$('#date4').click(function() {
		$('#night1').hide();
		$('#night2').hide();
		$('#night3').hide();
		$('#night4').fadeIn(300);
		$('#night5').hide();
		$('#night6').hide();
	});

	$('#date5').click(function() {
		$('#night1').hide();
		$('#night2').hide();
		$('#night3').hide();
		$('#night4').hide();
		$('#night5').fadeIn(300);
		$('#night6').hide();
	});

	$('#date6').click(function() {
		$('#night1').hide();
		$('#night2').hide();
		$('#night3').hide();
		$('#night4').hide();
		$('#night5').hide();
		$('#night6').fadeIn(300);
	});


	var name = "";

	$('.committee-photo').click(function() {
		name = this.className.split(" ")[1];
		// console.log(name)
		$("." + name + ".bio").fadeIn(300);
		$("#overlay").fadeIn(300);
	});

	$('.bio > .btn').click(function() {
		// console.log("ok clicked")
		$("." + name + ".bio").fadeOut(300);
		$("#overlay").fadeOut(300);
	});
});
