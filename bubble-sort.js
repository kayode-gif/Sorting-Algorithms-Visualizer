
// This file concerns bubble sort 
function bubbleSort(arr){
    const moves = []; 
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            moves.push({indices: [j,j+1], moveType: "compare"});
            if(arr[j] > arr[j+1]){
                moves.push({indices: [j,j+1], moveType: "change"});
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return moves;
}

function animateBubbleSort(moves) {
    animate(moves);
  }

function playBubbleSort() {
    playSort(bubbleSort);
  }
  

