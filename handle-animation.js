// This file is responsible for the changes to animation of the sorting 

let animationSpeed = 10;

function animate(moves) {
    if (moves.length === 0) {
      displayBars();
      isSorting = false;
      enableSliders();
      enableDropdown();
      enableButtons();

      return;
    }
    const move = moves.shift();
    const [i, j] = move.indices;
    if (move.moveType === "change") {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    displayBars(move);
    
    setTimeout(function () {
      animate(moves);
    }, getAnimationSpeed());
  }

  function enableSliders(){
    const sizeInput = document.getElementById("change-size-bars");
    const speedInput = document.getElementById("change-speed-bars");
    sizeInput.disabled = false;
    speedInput.disabled = false;
  }


  function disableSliders(){
    const sizeInput = document.getElementById("change-size-bars");
    const speedInput = document.getElementById("change-speed-bars");
    sizeInput.disabled = true;
    speedInput.disabled = true;
  }

  function enableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = false;
    });
  }

  function disableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = true;
    });
  }


  function enableDropdown() {
    const sortDropdown = document.getElementById("sort-dropdown");
    sortDropdown.disabled = false;
    sortDropdown.style.display = "block";
  }

  function disableAndHideDropdown(){
    const sortDropdown = document.getElementById("sort-dropdown");
    sortDropdown.disabled = true;
    sortDropdown.style.display = "none";
  }

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
    const currentMode = toggleModeButton.textContent;
  if(currentMode == "Dark Mode"){
    toggleModeButton.textContent = "Light Mode";
  }else{
    toggleModeButton.textContent = "Dark Mode"
  }
  }



  
