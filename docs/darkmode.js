document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const body = document.body;

  if (localStorage.getItem("darkMode") === "on") {
    body.classList.add("dark-mode");
  }

  if (logo) {
    logo.style.cursor = "pointer";

    logo.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "on");
      } else {
        localStorage.setItem("darkMode", "off");
      }
    });
  }
});