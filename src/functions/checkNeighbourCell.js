// recieves a board array and a cell, counts and returns the number of mines in neighbouring cells. returns M if the cell is a mine
export const CheckNeighbourCell = ( {array, cell} ) => {
    if (!cell.isMine) {
        const column = cell.column;
        const row = cell.row;

        const left = (column !== 0);
        const right = (column !== array.length-1);
        const up = (row !== 0);
        const down = (row !== array[cell.column].length-1);

        let neighbours = 0;
        left ? (array[column-1][row].isMine ? neighbours++ : null) : null;
        right ? (array[column+1][row].isMine ? neighbours++ : null): null;
        up ? (array[column][row-1].isMine ? neighbours++ : null) : null;
        down ? (array[column][row+1].isMine ? neighbours++ : null) : null;
        up && left ? (array[column-1][row-1].isMine ? neighbours++ : null) : null;
        up && right ? (array[column+1][row-1].isMine ? neighbours++ : null) : null;
        down && left ? (array[column-1][row+1].isMine ? neighbours++ : null) : null;
        down && right ? (array[column+1][row+1].isMine ? neighbours++ : null) : null;
        return neighbours;
    } else {
        return 'M';
    }
}
