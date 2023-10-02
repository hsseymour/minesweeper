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

    let boardRowsArray = new Array(boardrows);

    for (var i =0; i < boardRowsArray.length; i++) {
        boardRowsArray[i] = new Array(boardcols);
        boardRowsArray[i].fill(0);
    }

    const Cell = (props) => {
        let col = props.col;
        let row = props.row;
        let id = col + "-" + row; 

        const CellClick = () => {
            console.debug(id);
            document.getElementById(id).innerHTML = "0";
        }

        return (
            <>
                <button id={id} type="button" onClick={() => CellClick()}>-</button>
            </>
        );
    }

    const RowCols = (props) => props.cell.map((item, index) =>
        <td key={index}> <Cell row={props.row} col={index}/> </td>
    );

    const Rows = () => boardRowsArray.map((item, index) => 
        <tr key={index}>
            <RowCols cell={item} row={index} />
        </tr>
    );

    return (
        <>
            <div className="createBoardDiv">
                <table>
                    <tbody>
                        <Rows />
                    </tbody>
                </table>
            </div>
        </>
    );
}