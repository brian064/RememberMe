$(document).ready(main);

function main() {
  $(".title").hide();
  $(".dayCard").hide();
  $(".year").hide();
  $(".infoView").hide();
  $(".dim").hide();
  $(".add").hide();
  $(".dayView1").hide();
  $(".title").fadeIn(2000);
  $(".dayCard").fadeIn(2000);
  $(".year").fadeIn(2000);


  $(".infoIcon").click(function() {
		$(".infoView").slideDown(500);
    $(".dim").fadeIn(500);
	})

  $(".infoView img").click(function() {
		$(".infoView").slideUp(300);
    $(".dim").fadeOut(300);
	})

  $(".dim").click(function() {
		$(".infoView").slideUp(300);
    $(".dim").fadeOut(300);
	})

  $(".infoFooter").click(function() {
		$(".infoView").slideToggle(500);
    $(".dim").fadeToggle(500);
	})

  /*$(".infoFooter").click(function() {
		$(".infoView").slideUp(300);
	})*/

  $(".year img").mouseover(function() {
    $(".add").slideDown(300);
	})

  $(".year img").mouseout(function() {
		$(".add").slideUp(300);
	})

  $(".year-bg").click(function() {
		$(".yearView").slideToggle(500);
	})

  $(".month").click(function() {
		$(".dayView").slideToggle(500);
	})

  $(".month1").click(function() {
		$(".dayView1").slideToggle(500);
	})

  $(".red").click(function() {
		$("body").toggleClass("red-bg");
    $(".title").toggleClass("white-text");
    $(".mainHeader h2").toggleClass("white-text");
    $(".year").toggleClass("white-text");
    $(".dayCard").toggleClass("dayCard-night");

	})

  $(".red1").click(function() {
		$("body").toggleClass("red-bg");
    $(".title").toggleClass("white-text");
    $(".mainHeader h2").toggleClass("white-text");
    $(".year").toggleClass("white-text");
    $(".dayCard").toggleClass("dayCard-night");

	})


}
