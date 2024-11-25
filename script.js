// Get the heart container element
const heartContainer = document.querySelector('.heart-container');

// Function to generate hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Randomize horizontal position
  heart.style.left = `${Math.random() * 100}vw`; // Random position across the width
  
  // Assign a random animation duration (falling speed)
  const animationDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s
  heart.style.animationDuration = `${animationDuration}s`;
  
  // Append heart to the container
  heartContainer.appendChild(heart);

  // Remove the heart after its animation completes
  setTimeout(() => {
    heart.remove();
  }, animationDuration * 1000); // After the heart finishes its animation
}

// Create hearts at an interval to simulate continuous falling
setInterval(createHeart, 200); // Generate hearts every 200ms
