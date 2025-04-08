$(document).ready(function () {
  const tooltips = document.querySelectorAll(".team-tooltip");
  const images = document.querySelectorAll(".team-image");
  let current = 0;
  let interval;

  function showTooltip(index) {
    tooltips.forEach((tooltip, i) => {
      if (i === index) {
        tooltip.classList.remove("invisible", "opacity-0", "scale-95");
        tooltip.classList.add("visible", "opacity-100", "scale-100");
      } else {
        tooltip.classList.add("invisible", "opacity-0", "scale-95");
        tooltip.classList.remove("visible", "opacity-100", "scale-100");
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
    img.addEventListener("mouseenter", () => {
      stopRotation();
      current = index;
      showTooltip(index);
    });

    img.addEventListener("mouseleave", () => {
      startRotation();
    });
  });

  // Start initially
  showTooltip(current);
  startRotation();
});
