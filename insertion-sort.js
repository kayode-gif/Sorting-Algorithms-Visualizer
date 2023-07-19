
function insertionSort(arr){
    const moves = [];
    for(let i = 1; i < arr.length; i++){
      let numberToInsert = arr[i];
      let j = i - 1;
      moves.push({indices: [i,j], moveType: "compare"});
      while((j >= 0) && arr[j] > numberToInsert){
        moves.push({indices: [j+1,j], moveType: "change"});
        arr[j+1] = arr[j];
        j = j - 1;
      }
      moves.push({indices: [j+1,i], moveType: "change"});
      arr[j+1] = numberToInsert;
    }
    return moves;
  }
  
  function playInsertionSort() {
      playShellPlayInsert(insertionSort);
    }

  
  