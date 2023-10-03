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

export const CheckNeigbours = ( {col, row, boardArray}) => { 
    if (row !== 0) {
        let adjacent = document.getElementById(col + "-" + (row-1));
        if (adjacent.value === '0') { 
            adjacent.classList.add('neighbours-0', "revealedCell");
            CheckNeigbours({col: col, row: row-1, boardArray: boardArray});
        }
    }
    if (col !== 0) {
        let adjacent = document.getElementById((col-1) + "-" + row);
        if (adjacent.value === '0') { 
            adjacent.classList.add('neighbours-0', "revealedCell");
            CheckNeigbours({col: col, row: row-1, boardArray: boardArray});
        }
    }
    if (row < boardArray.length - 1) {
        let adjacent = document.getElementById(col + "-" + (row+1));
        if (adjacent.value === '0') { 
            adjacent.classList.add('neighbours-0', "revealedCell");
            CheckNeigbours({col: col, row: row-1, boardArray: boardArray});
        }
    }
    if (col !== boardArray[row].length - 1) {
        let adjacent = document.getElementById((col+1) + "-" + row);
        if (adjacent.value === '0') { 
            adjacent.classList.add('neighbours-0', "revealedCell");
            CheckNeigbours({col: col, row: row-1, boardArray: boardArray});
        }
    }
}
