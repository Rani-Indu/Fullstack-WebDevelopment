const container = document.getElementById("youtube-container");
const controls = document.getElementById("controls");
const floatingIcon = document.getElementById("floating-icon");

let hideControlsTimeout;

// Function to show controls
const showControls = () => {
  controls.style.opacity = "1";
  controls.style.pointerEvents = "auto"; // Enable interaction
};

// Function to hide controls after a delay
const hideControls = () => {
  clearTimeout(hideControlsTimeout); // Reset the timer if needed
  hideControlsTimeout = setTimeout(() => {
    controls.style.opacity = "0";
    controls.style.pointerEvents = "none"; // Disable interaction when hidden
  }, 3000); // 3 seconds delay before hiding
};

// Show controls and handle mouse activity inside container
container.addEventListener("mousemove", (e) => {
  showControls();
  hideControls();

  // Update the position of the floating icon dynamically
  floatingIcon.style.left = `${e.clientX - container.offsetLeft}px`;
  floatingIcon.style.top = `${e.clientY - container.offsetTop}px`;
  floatingIcon.style.display = "block";
});

// Hide floating icon when mouse leaves the container
container.addEventListener("mouseleave", () => {
  floatingIcon.style.display = "none";
  controls.style.opacity = "0";
  controls.style.pointerEvents = "none";
  clearTimeout(hideControlsTimeout); // Cancel any pending hide operation
});

// Ensure controls remain visible when hovering over them
controls.addEventListener("mouseenter", () => clearTimeout(hideControlsTimeout));

// Allow controls to hide when the mouse leaves them
controls.addEventListener("mouseleave", hideControls);
