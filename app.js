// A simple function to animate each count from 0 up to its target number
function animateCounters() {
    const counters = document.querySelectorAll(".count");
    const speed = 50; // Adjust for faster/slower counting
  
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
  
        // Increase the count by a fraction
        const increment = target / speed;
  
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }
  
  // Run the animation on page load
  window.addEventListener("DOMContentLoaded", animateCounters);
  