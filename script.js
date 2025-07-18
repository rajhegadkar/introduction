// Greeting Based on Time
const greetingElement = document.getElementById('greeting');
const now = new Date();
const hour = now.getHours();

let greeting = "Hello";
if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
greetingElement.textContent = `${greeting}! 👋`;

// Toggle Dark/Light Mode
const toggleBtn = document.getElementById('modeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Resume thumbnail click to expand
const resumeThumb = document.getElementById("resumePreview");
const resumeViewer = document.getElementById("resumeViewer");

resumeThumb.addEventListener("click", () => {
  resumeThumb.style.display = "none";
  resumeViewer.style.display = "block";
});
