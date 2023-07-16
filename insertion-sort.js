function insertionSort(arr){
    const moves = [];
    for(i = 1; i < arr.length; i++){
       let key = arr[i];
       let j = i-1;
       while (j >= 0 && arr[j] > key){
        moves.push({indices: [key,j+1], moveType: "compare"});
        arr[j+1] = arr[j];
        moves.push({indices: [key,j+1], moveType: "changes"});
        j--;
       }
       arr[j+1] = key;
    }
    return moves;
  }

  function animateInsertionSort(moves) {
    animate(moves);
  }

  function playInsertionSort() {
    playSort(insertionSort);
  }