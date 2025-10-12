// toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll("span.toggle-span, span.footer");

  function toggleOnOff(element) {
    element.classList.toggle("on");
  }

  spans.forEach(span => {
    span.addEventListener("mouseenter", () => toggleOnOff(span));
    span.addEventListener("mouseleave", () => toggleOnOff(span));
  });
});

