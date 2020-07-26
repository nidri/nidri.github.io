// Listeners
window.addEventListener("DOMContentLoaded", DomContentLoadedHandler);

// Functions
function DomContentLoadedHandler(e) {
  // Set experience
  setExperience();
}

function setExperience() {
  const exp = document.getElementById("exp");
  const yrs = new Date().getFullYear() - 2008;
  exp.innerHTML = yrs;
}
