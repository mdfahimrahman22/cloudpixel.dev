$(document).ready(function () {
  document.getElementById("scroll-down").addEventListener("click", () => {
    document
      .getElementById("next-section")
      .scrollIntoView({ behavior: "smooth" });
  });
});
