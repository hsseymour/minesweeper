// function that is called when a cell is clicked
export const OnCellClick = ( {cell, boardArray} ) => {
    if (cell.isClicked || cell.isFlagged) {
        return;
    } else if (cell.isMine) {
        console.debug("mine");
        return;
    } else {
        cell.isClicked = true;
        cell.isRevealed = true;
        if (cell.neighbours === 0){
            ClickNeighbours( {cell, boardArray} );
        }
        return;
    }
}
