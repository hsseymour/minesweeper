export const Random = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export const ConvertDifficulty = (difficulty) => {
    switch (difficulty) {
        case 'e':
            return [9, 9, 10];
        case 'm':
            return [16, 16, 40];
        case 'h':
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

    const CheckUp = () => {
        if (row !== 0) {
            let adjacent = document.getElementById(col + "-" + (row-1));
            if (adjacent.value === '0' && adjacent.innerHTML === '-') { 
                adjacent.classList.add('neighbours-0', "revealedCell");
                adjacent.innerHTML = '0';
                CheckNeigbours({col: col, row: (row-1), boardArray: boardArray});
            }
        }
    }
    const CheckDown = () => {
        if (row < boardArray.length - 1) {
            let adjacent = document.getElementById(col + "-" + (row+1));
            if (adjacent.value === '0' && adjacent.innerHTML === '-') { 
                adjacent.classList.add('neighbours-0', "revealedCell");
                adjacent.innerHTML = '0';
                CheckNeigbours({col: col, row: (row+1), boardArray: boardArray});
            }
        }
    }
    const CheckLeft = () => {
        if (col !== 0) {
            let adjacent = document.getElementById((col-1) + "-" + row);
            if (adjacent.value === '0' && adjacent.innerHTML === '-') { 
                adjacent.classList.add('neighbours-0', "revealedCell");
                adjacent.innerHTML = '0';
                CheckNeigbours({col: (col-1), row: row, boardArray: boardArray});
            }
        }
    }
    const CheckRight = () => {
        if (col < boardArray[row].length - 1) {
            let adjacent = document.getElementById((col+1) + "-" + row);
            if (adjacent.value === '0' && adjacent.innerHTML === '-') { 
                adjacent.classList.add('neighbours-0', "revealedCell");
                adjacent.innerHTML = '0';
                CheckNeigbours({col: (col+1), row: row, boardArray: boardArray});
            }
        }
        // turn into check func with checkVal and searchVal
    }

    CheckUp();
    CheckDown();
    CheckLeft();
    CheckRight();
}
