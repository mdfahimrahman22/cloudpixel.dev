// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

$(document).ready(function () {
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
});

$(document).ready(function () {
  // When the element with the class 'hamburger' is clicked
  $("#hamburger").click(function () {
    // Toggle the 'visible' and 'invisible' classes on the element with id 'sidebar'
    $("#sidebar").toggleClass("visible invisible");
  });
  $("#closeBtn").click(function () {
    // Toggle the 'visible' and 'invisible' classes on the element with id 'sidebar'
    $("#sidebar").toggleClass("visible invisible");
  });
  
  const tooltips = document.querySelectorAll('.team-tooltip');
  const images = document.querySelectorAll('.team-image');
  let current = 0;
  let interval;

  function showTooltip(index) {
    tooltips.forEach((tooltip, i) => {
      if (i === index) {
        tooltip.classList.remove('invisible', 'opacity-0', 'scale-95');
        tooltip.classList.add('visible', 'opacity-100', 'scale-100');
      } else {
        tooltip.classList.add('invisible', 'opacity-0', 'scale-95');
        tooltip.classList.remove('visible', 'opacity-100', 'scale-100');
      }
    });
  }

  function startRotation() {
    interval = setInterval(() => {
      current = (current + 1) % tooltips.length;
      showTooltip(current);
    }, 4000);
  }

  function stopRotation() {
    clearInterval(interval);
  }

  // Attach hover events
  images.forEach((img, index) => {
    img.addEventListener('mouseenter', () => {
      stopRotation();
      current = index;
      showTooltip(index);
    });

    img.addEventListener('mouseleave', () => {
      startRotation();
    });
  });

  // Start initially
  showTooltip(current);
  startRotation();


  document.getElementById('scroll-to-about').addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
  });
});
