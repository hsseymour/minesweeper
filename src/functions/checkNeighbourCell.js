// recieves a board array and a cell, counts and returns the number of mines in neighbouring cells. returns M if the cell is a mine
export const CheckNeighbourCell = ({ array, cell }) => {
  if (!cell.isMine) {
    const column = cell.column;
    const row = cell.row;

    const left = column !== 0;
    const right = column !== array.length - 1;
    const up = row !== 0;
    const down = row !== array[cell.column].length - 1;

    let neighbours = 0;
    if (left) {
      if (array[column - 1][row].isMine) {
        neighbours++;
      }
    }
    if (right) {
      if (array[column + 1][row].isMine) {
        neighbours++;
      }
    }
    if (up) {
      if (array[column][row - 1].isMine) {
        neighbours++;
      }
    }
    if (down) {
      if (array[column][row + 1].isMine) {
        neighbours++;
      }
    }
    if (up && left) {
      if (array[column - 1][row - 1].isMine) {
        neighbours++;
      }
    }
    if (up && right) {
      if (array[column + 1][row - 1].isMine) {
        neighbours++;
      }
    }
    if (down && left) {
      if (array[column - 1][row + 1].isMine) {
        neighbours++;
      }
    }
    if (down && right) {
      if (array[column + 1][row + 1].isMine) {
        neighbours++;
      }
    }
    return neighbours;
  } else {
    return "M";
  }
};
