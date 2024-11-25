// Get the heart container element
const heartContainer = document.querySelector('.heart-container');

// Function to generate hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration for fly animation
  
  heartContainer.appendChild(heart);

  // Remove heart after animation is complete to avoid unnecessary DOM elements
  setTimeout(() => {
    heart.remove();
  }, 10000); // After 10 seconds (adjust as needed)
}

// Create hearts every 500ms
setInterval(createHeart, 500);
