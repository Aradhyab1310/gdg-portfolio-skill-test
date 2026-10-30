// script.js - Alex Chen's portfolio
// Adds a subtle random flicker to the neon glow on the main heading.

document.addEventListener('DOMContentLoaded', () => {
  const heading = document.getElementById('glitch-heading');
  if (!heading) return;

  // Randomly flicker the heading glow at irregular intervals to feel alive.
  function flicker() {
    heading.style.opacity = (Math.random() * 0.15 + 0.85).toFixed(2);
    const delay = Math.random() * 4000 + 1000; // between 1s and 5s
    setTimeout(() => {
      heading.style.opacity = '1';
      setTimeout(flicker, Math.random() * 6000 + 2000);
    }, 60);
  }

  flicker();
});
