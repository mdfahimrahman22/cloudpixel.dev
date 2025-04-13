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
    // Toggle the 'visible' and 'invisible' classes on the element with id 'sidebar'
    $("#sidebar").toggleClass("visible invisible");
  });
  $("#closeBtn").click(function () {
    // Toggle the 'visible' and 'invisible' classes on the element with id 'sidebar'
    $("#sidebar").toggleClass("visible invisible");
  });
});
