function shellSort(arr) {
    const moves = [];
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
            moves.push({indices: [i,j], moveType: "compare"});
            while (j >= increment && arr[j-increment] > temp) {
                moves.push({indices: [j, j - increment], moveType: "change"});
                arr[j] = arr[j-increment];
                j = j - increment;
            }
            moves.push({indices: [j,i], moveType: "change"});
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return moves;
}


function playShellSort() {
    playShellPlayInsert(shellSort);
  }