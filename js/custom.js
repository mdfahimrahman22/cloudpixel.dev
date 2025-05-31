// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

$(document).ready(function () {
  const year = new Date().getFullYear();
  document.getElementById("copyright-year").textContent = year;

  $(".slick-slider").not(".slick-initialized").slick({
    dots: false, // Show navigation dots (optional)
    infinite: true, // Infinite looping of slides
    speed: 500, // Speed of slide transition in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable auto slide
    autoplaySpeed: 2000,
    arrows: false,
  });
  // When the element with the class 'hamburger' is clicked
  $("#hamburger").click(function () {
    $("#sidebar").toggleClass("visible invisible");
  });
  $("#closeBtn").click(function () {
    $("#sidebar").toggleClass("visible invisible");
  });
  
  $(document).on("click", function (e) {
    const $sidebar = $("#sidebar");
    const $hamburger = $("#hamburger");

    // Only apply logic if sidebar is currently visible
    if ($sidebar.hasClass("visible")) {
      if (
        !$sidebar.is(e.target) &&
        $sidebar.has(e.target).length === 0 &&
        !$hamburger.is(e.target) &&
        $hamburger.has(e.target).length === 0
      ) {
        $sidebar.removeClass("visible").addClass("invisible");
      }
    }
  });

});
