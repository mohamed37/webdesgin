
$(Window).on("scroll", function () {
    $(".navbar").css("backgroundColor", "#ffffffdb");
    if ($(window).scrollTop() === 0) {
        $(".navbar").css("backgroundColor", "#fff");
    }
});
