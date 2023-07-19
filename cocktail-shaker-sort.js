
function cocktailShakerSort(arr) {
    const moves = [];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i <= arr.length - 2; i++) {
            moves.push({indices: [i,i+1], moveType: "compare"});
            if (arr[i] > arr[i + 1]) {
                moves.push({indices: [i,i+1], moveType: "change"});
                // Test if two elements are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }

        swapped = false;
        for (let i = arr.length - 2; i >= 0; i--) {
            moves.push({indices: [i,i+1], moveType: "compare"});
            if (arr[i] > arr[i + 1]) {
                moves.push({indices: [i,i+1], moveType: "change"});
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return moves;
}

function playCockSort(){
    playSort(cocktailShakerSort);
}
