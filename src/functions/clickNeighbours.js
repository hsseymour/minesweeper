// recieves a cell and the board array, it then performs a click on all surrounding cells (used when a black cell is expanding the revealed area)
export const ClickNeighbours = ( {cell, boardArray} ) => {
    const column = cell.column;
    const row = cell.row;

    const left = (column !== 0);
    const right = (column !== boardArray.length-1);
    const up = (row !== 0);
    const down = (row !== boardArray[cell.column].length-1);

    left ? OnCellClick( {cell: boardArray[column-1][row], boardArray} ) : null;
    right ? OnCellClick( {cell: boardArray[column+1][row], boardArray} ) : null;
    up ? OnCellClick( {cell: boardArray[column][row-1], boardArray} ) : null;
    down ? OnCellClick( {cell: boardArray[column][row+1], boardArray} ) : null;
    up && left ? OnCellClick( {cell: boardArray[column-1][row-1], boardArray} ) : null;
    up && right ? OnCellClick( {cell: boardArray[column+1][row-1], boardArray} ) : null;
    down && left ? OnCellClick( {cell: boardArray[column-1][row+1], boardArray} ) : null;
    down && right ? OnCellClick( {cell: boardArray[column+1][row+1], boardArray} ) : null;
}
