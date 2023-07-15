



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

function playBubbleSort(){
    const copy = [...arr];
    const moves = bubbleSort(copy);
    animate(moves);
}

function animate(moves){
    if(moves.length == 0){
        displayBars();
        return;
    }
    const move = moves.shift();
    const [i,j] = move.indices;
    if(move.moveType == "change"){
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    displayBars(move);
    setTimeout(function(){
        animate(moves);
    },50);
}

