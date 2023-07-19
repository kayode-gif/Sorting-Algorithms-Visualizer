
function gnomeSort(arr){
    const moves = [];
    let index = 1;
    let temp;
    while (index < arr.length){
        moves.push({indices: [index,index -1], moveType: "compare"});
        if(arr[index] < arr[index - 1]){
            moves.push({indices: [index,index -1], moveType: "change"});
            temp = arr[index];
            arr[index] = arr[index - 1];
            arr[index - 1] = temp;
            index--;
            if(index  == 0){
                index = 1;
            }
        }
        else{
            index++;
        }
    }
    return moves;
}

function playGnomeSort(){
    playSort(gnomeSort);
}
