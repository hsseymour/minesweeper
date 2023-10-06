import { ClickNeighbours } from './clickNeighbours';

// function that is called when a cell is clicked
export const OnCellClick = ( {cell, boardArray} ) => {
    if (cell.isClicked || cell.isFlagged) {
        return;
    } else if (cell.isMine) {
        if (cell.addFunc != null) { cell.addFunc(true); }
        return;
    } else {
        if (cell.addFunc != null) { cell.addFunc(true); }
        cell.isClicked = true;
        cell.isRevealed = true;
        if (cell.neighbours === 0){
            ClickNeighbours( {cell, boardArray} );
        }
        return;
    }
}
