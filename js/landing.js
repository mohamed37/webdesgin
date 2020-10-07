$(Window).on("scroll", function () {
  $(".navbar").css("backgroundColor", "#03043226");
  $(".navbar").css("marginTop", "-3px");
  if ($(window).scrollTop() === 0) {
    $(".navbar").css("backgroundColor", "#efeff1");
    $(".navbar").css("marginTop", "60px");
  }
});
