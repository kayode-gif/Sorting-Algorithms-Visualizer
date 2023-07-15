
const n = 20;
const arr = [];

init();

function init(){
    for(let i = 0; i < n; i++) {
        arr[i] = Math.random();
    }
    displayBars();
}

// function playBubbleSort(){
//     const copy = [...arr];
//     const moves = bubbleSort(copy);
//     animate(moves);
// }

// function playMergeSort(){
// }

// function animate(moves){
//     if(moves.length == 0){
//         displayBars();
//         return;
//     }
//     const move = moves.shift();
//     const [i,j] = move.indices;
//     if(move.moveType == "change"){
//         [arr[i],arr[j]] = [arr[j],arr[i]];
//     }
//     displayBars(move);
//     setTimeout(function(){
//         animate(moves);
//     },50);
// }

// function bubbleSort(arr){
//     const moves = []; 
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length - i - 1; j++){
//             moves.push({indices: [j,j+1], moveType: "compare"});
//             if(arr[j] > arr[j+1]){
//                 moves.push({indices: [j,j+1], moveType: "change"});
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }
//     }
//     return moves;
// }

// function merge(arr, start, mid, end){
//     // These sigify the left and right array which are split 
//     const left = arr.slice(start, mid + 1);
//     const right = arr.slice(mid + 1, end + 1);
//     const moves = [];
//     let i = 0;
//     let j = 0;
//     let k = start;

//     while (i < left.length && j < right.length){
//         moves.push({indices: [i,j], moveType: "compare"});
//         if(left[i] < right[j]){
//             moves.push({indices: [k], moveType: "change"});
//             arr[k] = left[i];
//             i = i + 1;
//         }
//         else{
//             moves.push({indices: [i,j], moveType: "compare"});
//             arr[k] = right[j];
//             moves.push({indices: [k], moveType: "change"});
//             j = j + 1;

//         }
//         k = k + 1;
//     }
//     while (i < left.length) {
//         moves.push({ indices: [k], moveType: "change" });
//         arr[k] = left[i];
//         i = i + 1;
//         k = k + 1;
//       }
//       while (j < right.length) {
//         moves.push({ indices: [k], moveType: "change" });
//         arr[k] = right[j];
//         j = j + 1;
//         k = k + 1;
//       }
//       return moves;
// }

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
