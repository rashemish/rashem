// rashe mishra digit 400 // darkmode.js // turns home webpage into dark mode 

document.addEventListener("DOMContentLoaded", () => {

//button
const toggleBtn = document.createElement("img");
  toggleBtn.src = "images/logo.png";
  toggleBtn.alt = "Toggle Dark Mode"; 

// button styling //still want to change button styling...
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.width = "50px"; 
  toggleBtn.style.height = "50px";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.zIndex = "9999";
  toggleBtn.style.borderRadius = "50%";
  toggleBtn.style.backgroundColor = "#fff"; 
  toggleBtn.style.padding = "5px";
  toggleBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";

  document.body.appendChild(toggleBtn);

  // toggle functions
  let colorToggle = false;
  toggleBtn.addEventListener("click", () => {
    
  // dark mode toggle
  document.body.classList.toggle("dark-mode");

  // toggle function
  const helloTexts = document.querySelectorAll(".hello-text");
  helloTexts.forEach(el => {
      if (!colorToggle) {
        el.style.color = "#B8B8B8"; 
      } else {
        el.style.color = "#0A0903";
      }
    });

    colorToggle = !colorToggle;
  });
});

