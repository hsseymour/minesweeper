import { ClickNeighbours } from './clickNeighbours';

// function that is called when a cell is clicked
export const OnCellClick = ( {cell, boardArray} ) => {
    if (cell.isClicked || cell.isFlagged) {
        return false;
    } else if (cell.isMine) {
        if (cell.addFunc != null) { cell.addFunc(true); }
        return true;
    } else {
        if (cell.addFunc != null) { cell.addFunc(true); }
        cell.isClicked = true;
        cell.isRevealed = true;
        if (cell.neighbours === 0){
            ClickNeighbours( {cell, boardArray} );
        }
        return false;
    }
}
