
const n = 20;
const arr = [];

reset();

function reset(){
    for(let i = 0; i < n; i++) {
        arr[i] = Math.random();
    }
    displayBars();
}

function playBubbleSort(){
    const copy = [...arr];
    const moves = bubbleSort(copy);
    animateBubbleSort(moves);
}


function playSelectionSort(){
    const copy = [...arr];
    const moves = selectionSort(copy);
    animateSelectionSort(moves);
}


function displayBars(move){
    container.innerHTML ="";
    for(let i = 0; i < arr.length; i++) {
        const bar = document.createElement('div');
        bar.style.height = arr[i] * 100 + "%";
        bar.classList.add("bar");
        if (move && move.indices.includes(i)){
            bar.style.backgroundColor =
            move.moveType == "change" ? "red" : "blue";
        }
        container.appendChild(bar);
    }
}
