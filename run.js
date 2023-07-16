
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


function displayBars(move){
    const container = document.getElementById("container");
    container.innerHTML ="";
    for(let i = 0; i < arr.length; i++) {
        const bar = document.createElement('div');
        bar.style.height = arr[i] * 100 + "%";
        bar.classList.add("bar");
        if (move && move.indices.includes(i)){
            bar.style.backgroundColor =
            move.moveType == "change" ? "green" : "red";
        }
        container.appendChild(bar);
    }
}
  
  
  
  
  








