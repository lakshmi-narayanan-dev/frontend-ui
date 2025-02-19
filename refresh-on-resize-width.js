let initialWidth = window.innerWidth;
let resizeTimeout;

window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (Math.abs(window.innerWidth - initialWidth) > 50) {
      location.reload();
    }
  }, 250); // Delay reload to prevent excessive calls
});
