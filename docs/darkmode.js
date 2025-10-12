//rashe mishra //darkmode.js //changes my website (only my home page for now) into a darkmode

//toggle button: my website logo
document.addEventListener("DOMContentLoaded", () => {
const logo = document.querySelector(".logo");
const body = document.body;
const helloText = document.querySelector(".hello-text, #hello-text");
const helloImg = document.querySelector(".hello-img");


//toggle function: changes body, hello-text, and hello-image to darkmode
if (logo) {
logo.style.cursor = "pointer"; //this shows that the logo is clickable

logo.addEventListener("click", () => { //click!
body.classList.toggle("dark-mode"); //toggles dark mode

if (helloText) {
helloText.classList.toggle("dark-hello"); //toggles darkmode text
}
if (helloImg) {
if (helloImg.src.includes("rashewave2.png")) { //toggles darkmode image
helloImg.src = "images/rashewave1.png";
} else {
helloImg.src = "images/rashewave2.png";
}
}
});
}
});

