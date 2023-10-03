import { useEffect } from "react";
import { Random, CountNeigbours, CheckNeigbours } from "../rsc/funcs";

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
        } while (mineCount !== mines);
        return array;
    }

    let boardArray = CreateBoardArray(boardrows, boardcols);
    console.debug(boardArray);

    const Cell = (props) => {
        let col = props.col;
        let row = props.row;
        let id = col + "-" + row;
        let neighbours = CountNeigbours({col: col, row: row, boardArray: boardArray});

        useEffect(() => {
            let cell = document.getElementById(id);
            cell.value = neighbours;
            cell.addEventListener('click', () => {
                if (document.getElementById(id).innerHTML === '-') {
                    if (!boardArray[row][col]) { 
                        document.getElementById(id).innerHTML = neighbours;
                        document.getElementById(id).classList.add('neighbours-' + neighbours.toString(), "revealedCell");

                        if (neighbours === 0) {
                            CheckNeigbours({col: col, row: row, boardArray: boardArray});
                        }

                    }
                    else { 
                        document.getElementById(id).innerHTML = ":(";
                        document.getElementById(id).classList.add('foundMine');
                     }
                }
            });
            cell.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                console.debug("Right click on: " + id);
                if (document.getElementById(id).innerHTML === '-') { document.getElementById(id).innerHTML = '▸'; }
                else if (document.getElementById(id).innerHTML === '▸') { document.getElementById(id).innerHTML = '-'; }
            });
        });

        return (
            <button id={id} type="button">-</button>
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
        <div id="createBoardDiv">
            <table>
                <tbody>
                    <Rows />
                </tbody>
            </table>
        </div>
    );
}