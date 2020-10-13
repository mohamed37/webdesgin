
$(Window).on("scroll", function () {
    $(".navbar").css("backgroundColor", "#03043226");
    if ($(window).scrollTop() === 0) {
        $(".navbar").css("backgroundColor", "#fff");
    }
});
