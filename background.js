// Background decorations - shared across all pages
function createBackgroundDecorations() {
  const bgDecoration = document.getElementById('bgDecoration');
  if (!bgDecoration) return;

  // Add floating hearts
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 15}s`;
    heart.style.animationDuration = `${15 + Math.random() * 10}s`;
    bgDecoration.appendChild(heart);
  }

  // Add twinkling stars
  for (let i = 0; i < 30; i++) {
    const star = document.createElement('div');
    star.className = 'floating-star';
    star.innerHTML = '✦';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    bgDecoration.appendChild(star);
  }

  // Add glowing orbs
  const orbColors = ['#ec4899', '#8b5cf6', '#3b82f6', '#06b6d4'];
  for (let i = 0; i < 4; i++) {
    const orb = document.createElement('div');
    orb.className = 'orb';
    orb.style.width = `${150 + Math.random() * 100}px`;
    orb.style.height = orb.style.width;
    orb.style.background = orbColors[i];
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;
    orb.style.animationDelay = `${i * 5}s`;
    bgDecoration.appendChild(orb);
  }

  // Add sparkles
  for (let i = 0; i < 40; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    bgDecoration.appendChild(sparkle);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', createBackgroundDecorations);
