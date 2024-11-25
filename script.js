// Get the heart container element
const heartContainer = document.querySelector('.heart-container');

// Function to generate hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Position the heart randomly within the viewport width
  heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  
  // Assign random speed (animation duration) to each heart
  const animationDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s
  heart.style.animationDuration = `${animationDuration}s`;
  
  heartContainer.appendChild(heart);

  // Remove the heart after its animation duration ends
  setTimeout(() => {
    heart.remove();
  }, animationDuration * 1000); // After the heart finishes its animation
}

// Create hearts every 200ms (to simulate a "rain" effect)
setInterval(createHeart, 200);
