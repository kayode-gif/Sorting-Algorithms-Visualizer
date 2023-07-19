// This file is responsible for the changes to animation of the sorting 

let animationSpeed = 10;
let audioSound = null;
let audioEnabled = true;
const MIN_FREQ = 200;
const MAX_FREQ = 600;


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
    playSound(MIN_FREQ+ arr[i] * MAX_FREQ);
    playSound(MIN_FREQ+ arr[j] * MAX_FREQ);
    displayBars(move);
    setTimeout(function () {
      animate(moves);
    }, getAnimationSpeed());
  }



  // ANIMATE INSERTION SORT AND SHELL SORT
  function animateShellInsert(moves) {
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
      if(i > j){
        [arr[i],arr[j]] = [arr[j],arr[i]];
      }
    }
    playSound(MIN_FREQ+ arr[i] * MAX_FREQ);
    playSound(MIN_FREQ+ arr[j] * MAX_FREQ);
    displayBars(move);
    setTimeout(function () {
        animateShellInsert(moves);
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

    const container = document.getElementById("container");
    const barElements = container.getElementsByClassName("bar");
    const barWidth = 500 / newSize; // Adjust the width of the bars based on the new size

  for (let i = 0; i < barElements.length; i++) {
    barElements[i].style.width = barWidth + "px"; // Set the updated width of the bars
  }
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


  // This is to allow the user to set if the sound off or on

const toggleSoundButton = document.getElementById("toggle-sound");
toggleSoundButton.addEventListener("click", toggleSound);

function toggleSound() {
  audioEnabled = !audioEnabled;
  toggleSoundButton.textContent = audioEnabled ? "Sound On" : "Sound Off";
}

// adding sound to the bars if user would like that using webaudio api
// (adding sound could help people with vision loss using the sound)
function playSound(music){
  if(!audioEnabled){
    return;
  }
  if(audioSound == null){
      audioSound = new(AudioContext || webAudioContext
          || window.webkitAudioContext)();
  }
  const music_duration = 0.1;
  const oscilator = audioSound.createOscillator();
  oscilator.frequency.value = music;
  oscilator.start();
  oscilator.stop(audioSound.currentTime + music_duration);
  const node = audioSound.createGain();
  node.gain.value = 0.1;
  node.gain.linearRampToValueAtTime(0, audioSound.currentTime +music_duration);
  oscilator.connect(node);
  node.connect(audioSound.destination);
}

