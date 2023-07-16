// // This file concerns selection sort 
function selectionSort(arr){
    const moves = [];
    for(let i=0;i<arr.length - 1;i++){
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++){
            moves.push({indices: [j,minIndex], moveType: "compare"});
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        moves.push({indices: [i,minIndex], moveType: "change"});
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return moves;
}


function animateSelectionSort(moves) {
    animate(moves);
  }

  function playSelectionSort() {
    playSort(selectionSort);
  }