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

function animateSelectionSort(moves){
    if(moves.length == 0){
        displayBars();
        return;
    }
    const move = moves.shift();
    const [i,j] = move.indices;
    if(move.moveType === "change"){
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    displayBars(move);
    setTimeout(function(){
        animateSelectionSort(moves);
    },50);
}