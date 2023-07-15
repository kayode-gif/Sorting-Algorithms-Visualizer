// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let current = arr[i];
//         let j;
//         for(j = i - 1; j >= 0 && arr[j] > current; j--){
//             moves.push({ indices: [j + 1, j], moveType: "compare" });
//             arr[j+1] = arr[j]
//         }
//         moves.push({ indices: [j + 1, i], moveType: "compare" });
//         arr[j+1] = curr;
//     }
// }

// function animateInsertionSort(moves){
//     if(moves.length == 0){
//         displayBars();
//         return;
//     }
//     const move = moves.shift();
//     const [i,j] = move.indices;
//     if(move.moveType === "change"){
//         [arr[i],arr[j]] = [arr[j],arr[i]];
//     }
//     displayBars(move);
//     setTimeout(function(){
//         animateInsertionSort(moves);
//     },50);
// }