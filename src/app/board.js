import { Random } from "../rsc/funcs";

export const CreateBoard = (props) => { 

    let boardcols, boardrows, mines;

    switch (props.difficulty) {
        case 'e':
            boardcols = boardrows = 9;
            mines = 10;
            break;
        case 'm':
            boardcols = boardrows = 16;
            mines = 40;
            break;
        case 'h':
            boardcols = 16;
            boardrows = 30;
            mines = 99;
            break;
        default:
            break;
    }

    const CreateBoardArray = (rows, cols) => {
        let array, mineCount;
        do {
            array = [];
            mineCount = 0;
            for (let i = 0; i < rows; i++){
                let row = [];
                for (let j = 0; j < cols; j++) {
                    let rnd = Random(1, rows*cols);
                    if (rnd <= mines) {
                        if (mineCount < mines) {
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
            console.debug(mineCount);
        } while (mineCount !== mines);
        return array;
    }


    // let boardRowsArray = new Array(boardrows);

    // for (var i = 0; i < boardRowsArray.length; i++) {
    //     boardRowsArray[i] = new Array(boardcols);
    //     boardRowsArray[i].fill(false);
    //     console.debug(boardRowsArray);

    //     for (let z = 0; z < boardRowsArray[i].length; i++) {
    //         let rnd = Random(0,1);
    //         console.debug(rnd + " " + i + " " + z);

    //         if (rnd === 1) { boardRowsArray[i][z] = true } else { boardRowsArray[i][z] = false }
    //     //    (rnd === 1 ? boardRowsArray[i][z] = true : boardRowsArray[i][z] = false);
    //     }
    // }

    let boardArray = CreateBoardArray(boardrows, boardcols);
    console.debug(boardArray);

    const Cell = (props) => {
        let col = props.col;
        let row = props.row;
        let id = col + "-" + row;
        let neighbours = 0;

        if (!boardArray[row][col]) {
            if (row !== 0) {
                if (boardArray[row-1][col] === true ) { neighbours++; }
                if (col !== 0) {
                    if (boardArray[row-1][col-1] === true ) { neighbours++; }
                }
                if (col !== boardcols) {
                    if (boardArray[row-1][col+1] === true ) { neighbours++; }
                }
            }
            //if (row !== boardrows) {
            if (row < boardrows - 1) {
                console.debug(row + " " + col + " " + boardrows + " ");
                console.debug(boardArray[row][col]);
                console.debug(boardArray[row+1][col]);
                if (boardArray[row+1][col] === true ) { neighbours++; }
                if (col !== 0) {
                    if (boardArray[row+1][col-1] === true ) { neighbours++; }
                }
                if (col !== boardcols) {
                    if (boardArray[row+1][col+1] === true ) { neighbours++; }
                }
            }
            if (col !== 0) {
                if (boardArray[row][col-1] === true ) { neighbours++; }
            }
            if (col !== boardcols) {
                if (boardArray[row][col+1] === true ) { neighbours++; }
            }
        }

        const CellClick = () => {
            console.debug(id + " " + boardArray[row][col] + " " + neighbours);
            if (!boardArray[row][col]) { document.getElementById(id).innerHTML = neighbours; }
            else { document.getElementById(id).innerHTML = ":("; }
        }

        return (
            <button id={id} type="button" onClick={() => CellClick()}>-</button>
        );
    }

    const RowCols = (props) => props.cell.map((item, index) =>
        <td key={index}> <Cell row={props.row} col={index}/> </td>
    );

    const Rows = () => boardArray.map((item, index) => 
        <tr key={index}>
            <RowCols cell={item} row={index} />
        </tr>
    );

    return (
        <div className="createBoardDiv">
            <table>
                <tbody>
                    <Rows />
                </tbody>
            </table>
        </div>
    );
}