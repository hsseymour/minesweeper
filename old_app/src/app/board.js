import { useEffect } from "react";
import { ConvertDifficulty, CreateBoardArray, CountNeigbours, CheckNeigbours } from "../rsc/funcs";

export const CreateBoard = (props) => { 

    let boardData = ConvertDifficulty(props.difficulty);
    let boardArray = CreateBoardArray(boardData);
    let SetGameState = (gameState) => { props.setGameState(gameState); }

    const Cell = (props) => {
        let col = props.col;
        let row = props.row;
        let id = col + "-" + row;
        let neighbours = CountNeigbours({col: col, row: row, boardArray: boardArray});

        useEffect(() => {
            let cell = document.getElementById(id);
            cell.value = neighbours;
            cell.addEventListener('click', () => {
                if (cell.innerHTML === '-') {
                    if (!boardArray[row][col]) { 
                        cell.innerHTML = neighbours;
                        cell.classList.add('neighbours-' + neighbours.toString(), "revealedCell");
                        if (neighbours === 0) {
                            CheckNeigbours({col: col, row: row, boardArray: boardArray});
                        }
                    }
                    else { 
                        cell.innerHTML = ":(";
                        cell.classList.add('foundMine');
                        let allCells = document.getElementById('createBoardDiv').querySelectorAll("button");
                        allCells.forEach(button => {
                        //    button.removeEventListener('click', this);
                        });

                        //SetGameState('4');
                     }
                }
            });
            cell.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                console.debug("Right click on: " + id);
                if (cell.innerHTML === '-') { cell.innerHTML = '▸'; }
                else if (cell.innerHTML === '▸') { cell.innerHTML = '-'; }
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