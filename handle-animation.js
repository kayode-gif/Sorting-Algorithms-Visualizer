// This file is responsible for the changes to animation of the sorting 

function handleSizeChange() {
    const barSizeInput = document.getElementById("change-size-bars");
    const newSize = parseInt(barSizeInput.value);
  
    if (newSize < 4) {
      barSizeInput.value = 4; // 4 is the minimum number of bars 
      return; // Exit the function to prevent further execution
    }
    
    if (newSize < n) {
      arr = arr.slice(0, newSize);
    } else {
      for (let i = n; i < newSize; i++) {
        arr[i] = Math.random();
      }
    }
    n = newSize;
    reset();
  }
  document.getElementById("change-size-bars").addEventListener("input", handleSizeChange);


  
  // Get the animation speed based on the position of the speed cursor
  function getAnimationSpeed() {
    const speedInput = document.getElementById("change-speed-bars");
    return 100 - parseInt(speedInput.value); // Invert the value to make higher values correspond to faster speed
  }
  // Update the animation speed when the speed cursor value changes
  document.getElementById("change-speed-bars").addEventListener("input", function () {
    animationSpeed = getAnimationSpeed();
  });


  
  const toggleModeButton = document.getElementById("toggle-mode-btn");
  toggleModeButton.addEventListener("click", toggleMode);
  
  // This customises the background to either light mode or dark mode 
  function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  