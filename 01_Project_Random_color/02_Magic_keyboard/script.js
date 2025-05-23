// script.js

// Select the element where the key will be displayed
const display = document.getElementById("keyDisplay");

// Listen for any key press
document.addEventListener("keydown", function(event) {
  // Get the key that was pressed
  const keyPressed = event.key;

  // Display the key on the webpage
  display.textContent = `You pressed: ${keyPressed}`;
});
