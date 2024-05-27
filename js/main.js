$(".home-image.rl").on("click", function () {
  $(".home-image.rl").css({ "grid-column": "2/5" });
  $(".rl.descript").css({ display: "block" });
});
$(".home-image.html").on("click", function () {
  $(".home-image.html").css({ "grid-column": "9/12" });
  $(".html.descript").css({ display: "block" });
});
$(".home-image.pyth").on("click", function () {
  $(".home-image.pyth").css({ "grid-column": "2/5" });
  $(".pyth.descript").css({ display: "block" });
});
/* controls dropdown Navbar Menu*/
$(".dropMenu1").on("mouseenter", function () {
  $(".dropdown1").css({ display: "block" });
});
$(".dropMenu1").on("mouseleave", function () {
  $(".dropdown1").css({ display: "none" });
});
$(".dropMenu2").on("mouseenter", function () {
  $(".dropdown2").css({ display: "block" });
});
$(".dropMenu2").on("mouseleave", function () {
  $(".dropdown2").css({ display: "none" });
});
/* end of Navbar dropdowns */
