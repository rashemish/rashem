//rashe mishra //darkmode.js //changes my website (only my home page for now) into a darkmode

//toggle button: my website logo
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const body = document.body;
  const helloText = document.querySelector(".hello-text, #hello-text"); 

//toggle function: changes header,body, and hello-text to darkmode
  if (logo) {
    logo.style.cursor = "pointer";

    logo.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (helloText) {
        helloText.classList.toggle("dark-hello");
      }
    });
  }
});

