
let n = 40;
let arr = []

let isSorting = false;

reset();

function reset(){
    for(let i = 0; i < n; i++) {
        arr[i] = Math.random();
    }
    displayBars();
}

function playSort(sortAlgorithm) {
  if(isSorting) return;
  isSorting = true;
  const copy = [...arr];
  const moves = sortAlgorithm(copy);
  animate(moves);
  disableAndHideDropdown();
  disableSliders();
  disableButtons();
  }

  // DISTINCT INSERTION SORT 

  function playSortInsertionSort(sortAlgorithm) {
    if(isSorting) return;
    isSorting = true;
    const copy = [...arr];
    const moves = sortAlgorithm(copy);
    animateInsertionSort(moves);
    disableAndHideDropdown();
    disableSliders();
    disableButtons();
    }
  


function displayBars(move){
    const container = document.getElementById("container");
    container.innerHTML ="";

    const barSizeInput = document.getElementById("change-size-bars");
    const newSize = parseInt(barSizeInput.value);
    const barWidth = 500 / newSize; // Calculate the new width of the bars


    for(let i = 0; i < arr.length; i++) {
        const bar = document.createElement('div');
        bar.style.height = arr[i] * 100 + "%";

        bar.style.width = barWidth + "px"; // Set the new width of the bars

        bar.classList.add("bar");
        if (move && move.indices.includes(i)){
            bar.style.backgroundColor =
            move.moveType == "change" ? "green" : "red";
        }
        container.appendChild(bar);
    }
}
  
  








