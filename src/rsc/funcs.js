export const Random = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export const CountNeigbours = ( {row, col, boardArray} ) => {
    let neighbours = 0;
    if (!boardArray[row][col]) {
        if (row !== 0) {
            if (boardArray[row-1][col] === true ) { neighbours++; }
            if (col !== 0) {
                if (boardArray[row-1][col-1] === true ) { neighbours++; }
            }
            if (col !== boardArray[row].length) {
                if (boardArray[row-1][col+1] === true ) { neighbours++; }
            }
        }
        //if (row !== boardrows) {
        if (row < boardArray.length - 1) {
            if (boardArray[row+1][col] === true ) { neighbours++; }
            if (col !== 0) {
                if (boardArray[row+1][col-1] === true ) { neighbours++; }
            }
            if (col !== boardArray[row].length) {
                if (boardArray[row+1][col+1] === true ) { neighbours++; }
            }
        }
        if (col !== 0) {
            if (boardArray[row][col-1] === true ) { neighbours++; }
        }
        if (col !== boardArray[row].length) {
            if (boardArray[row][col+1] === true ) { neighbours++; }
        }
    }
    return neighbours;
}
    