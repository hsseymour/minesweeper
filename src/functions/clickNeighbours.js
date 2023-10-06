import { OnCellClick } from "./onCellClick";

// recieves a cell and the board array, it then performs a click on all surrounding cells (used when a black cell is expanding the revealed area)
export const ClickNeighbours = ( {cell, boardArray} ) => {
    const column = cell.column;
    const row = cell.row;

    const left = (column !== 0);
    const right = (column !== boardArray.length-1);
    const up = (row !== 0);
    const down = (row !== boardArray[cell.column].length-1);

    if (left) { OnCellClick( {cell: boardArray[column-1][row], boardArray} ); }
    if (right) { OnCellClick( {cell: boardArray[column+1][row], boardArray} ); }
    if (up) { OnCellClick( {cell: boardArray[column][row-1], boardArray} ); }
    if (down) { OnCellClick( {cell: boardArray[column][row+1], boardArray} ); }
    if (up && left) { OnCellClick( {cell: boardArray[column-1][row-1], boardArray} ); }
    if (up && right) { OnCellClick( {cell: boardArray[column+1][row-1], boardArray} ); }
    if (down && left) { OnCellClick( {cell: boardArray[column-1][row+1], boardArray} ); }
    if (down && right) { OnCellClick( {cell: boardArray[column+1][row+1], boardArray} ); }
}
