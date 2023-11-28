function logWidth() {
    console.log(window.innerWidth);
  }
  
  window.addEventListener("changed", () => {
    if (window.innerWidth >= 1000) {
      logWidth();
    }
  });
  