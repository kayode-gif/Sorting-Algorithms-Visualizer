
let n = 40;
let arr = []
let animationSpeed = 10;


reset();

function reset(){
    for(let i = 0; i < n; i++) {
        arr[i] = Math.random();
    }
    displayBars();
}


function playSort(sortAlgorithm) {
    const copy = [...arr];
    const moves = sortAlgorithm(copy);
    animate(moves);
  }

function animate(moves) {
    if (moves.length === 0) {
      displayBars();
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
