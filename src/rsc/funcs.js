export const Random = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export const ConvertDifficulty = (difficulty) => {
    switch (difficulty) {
        case '1':
            return [9, 9, 10];
        case '2':
            return [16, 16, 40];
        case '3':
            return [16, 30, 99];
        default:
            break;
    }
}

export const CreateBoardArray = (boardData) => {
    let rows = boardData[1];
    let cols = boardData[0];
    let array, mineCount;
    do {
        array = [];
        mineCount = 0;
        for (let i = 0; i < rows; i++){
            let row = [];
            for (let j = 0; j < cols; j++) {
                let rnd = Random(1, rows*cols);
                if (rnd <= boardData[2]) {
                    if (mineCount < boardData[2]) {
                        row.push(true);
                        mineCount++;
                    } else {
                        row.push(false);
                    }
                } else {
                    row.push(false);
                }
            }
            array.push(row);
        }
    } while (mineCount !== boardData[2]);
    return array;
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


export const CheckNeigbours = ({col, row, boardArray}) => { 

    const Check = (conditional, col, row) => { 
        if (conditional) {
            let adjacent = document.getElementById((col) + "-" + row);
            // if (adjacent.value === '0' && adjacent.innerHTML === '-') { 
            if (adjacent.innerHTML === '-') { 
                adjacent.classList.add('neighbours-' + adjacent.value, "revealedCell");
                adjacent.innerHTML = adjacent.value;
                CheckNeigbours({col: (col), row: row, boardArray: boardArray});
            }
        }
    }

    if (document.getElementById((col) + "-" + row).value === '0'){
        Check((row !== 0 && col !== 0), (col-1), (row-1)); //Check up left
        Check((row !== 0), col, (row-1)); //Check up
        Check((row !== 0 && col < boardArray[row].length - 1), (col+1), (row-1)); //Check up right
        Check((col !== 0), (col-1), row); //Check left
        Check((col < boardArray[row].length - 1), (col+1), row); //Check right
        Check((row < boardArray.length - 1 && col !== 0), (col-1), (row+1)); //Check down left
        Check((row < boardArray.length - 1), col, (row+1)); //Check down
        Check((row < boardArray.length - 1 && col < boardArray[row].length - 1), (col+1), (row+1)); //Check down right
    }
}
