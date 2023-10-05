/*
------------------------------------------------------------------------------------------
      set variables
------------------------------------------------------------------------------------------
*/

let boardWidth = 5;
let boardHeight = 5;
let numberOfMines = 3;

/*
------------------------------------------------------------------------------------------
      general functions
------------------------------------------------------------------------------------------
*/

// recieves a minimum and maximum values and returns a random number which is inclusive of the min/max
const CreateRandomInclusive = ({ min, max }) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

// recieves an array of arrays and returns a 1D array
const ConvertTo1D = ({ array }) => {
  return array.flat();
};

// recieves an array and returns a random element from an array and the sliced array
const GetRandomElementFromArray = ({ array }) => {
  const rnd = Math.floor(Math.random() * array.length);
  const rndElement = { ...array[rnd] };
  const slicedArray = [...array.slice(0, rnd), ...array.slice(rnd + 1)];
  return { element: rndElement, slicedArray };
};

// recieves a board array and a cell, counts and returns the number of mines in neighbouring cells. returns M if the cell is a mine
const CheckNeighbourCell = ( {array, cell} ) => {
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

/*
------------------------------------------------------------------------------------------
      board functions
------------------------------------------------------------------------------------------
*/

// recieves width, hight, and a click function and returns an array of arrays containing cell-like objects with assigned column and row values
const Create2DBoardArray = ({ w, h, clicked }) => {
  const boardArray = Array.from({ length: h }, (value, index) => index).map(
    (column) => {
      return Array.from({ length: w }, (value, index) => index).map((row) => {
        return {
          column: column,
          row: row,
          isMine: false,
          neighbours: null,
          isRevealed: false,
          isFlagged: false,
          clicked: ( {cell, boardArray} ) => {
            clicked( {cell, boardArray} );
          },
        };
      });
    }
  );
  return boardArray;
};

// recieves an array of arrays and target number of mines and returns a random array of cells
const ExtractMultipleCells = ({ array, mineCount }) => {
  const extractedArray = ConvertTo1D({ array });

  return new Array(mineCount).fill().reduce((acc, curr) => {
      const { element, slicedArray } = GetRandomElementFromArray( {array: acc.extractedArray} );
      return {elements: [...acc.elements, element], extractedArray: slicedArray};
    },{ elements: [], extractedArray }
  ).elements;
};

// recieves an empty board array and an array of cell-like objects to become mines and returns an a board array with mines included
const PopulateMines = ({ array, mineList }) => {
  const populatedArray = Array.from(array);
  mineList.forEach((mine) => {
    populatedArray[mine.column][mine.row].isMine = true;
  });
  return populatedArray;
};

// recieves a board array and returns an array with neigbour values updated
const CheckNeighbourValues = ({ array }) => {
  const filledArray = Array.from(array);
  filledArray.forEach((column) => {
    column.forEach((cell) => {
      const neighbours = CheckNeighbourCell( {array, cell} );
      cell.neighbours = neighbours;
      return cell;
    });
  });
  return filledArray;
};

const ClickNeighbours = ( {cell, boardArray} ) => {
  const column = cell.column;
  const row = cell.row;

  const left = (column !== 0);
  const right = (column !== boardArray.length-1);
  const up = (row !== 0);
  const down = (row !== boardArray[cell.column].length-1);

  let neighbours = 0;
  left ? OnCellClick( {cell: boardArray[column-1][row], boardArray} ) : null;
  right ? OnCellClick( {cell: boardArray[column+1][row], boardArray} ) : null;
  up ? OnCellClick( {cell: boardArray[column][row-1], boardArray} ) : null;
  down ? OnCellClick( {cell: boardArray[column][row+1], boardArray} ) : null;
  up && left ? OnCellClick( {cell: boardArray[column-1][row-1], boardArray} ) : null;
  up && right ? OnCellClick( {cell: boardArray[column+1][row-1], boardArray} ) : null;
  down && left ? OnCellClick( {cell: boardArray[column-1][row+1], boardArray} ) : null;
  down && right ? OnCellClick( {cell: boardArray[column+1][row+1], boardArray} ) : null;
}

// function that is called when a cell is clicked
const OnCellClick = ( {cell, boardArray} ) => {
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
};

/*
------------------------------------------------------------------------------------------
      initialise functions
------------------------------------------------------------------------------------------
*/

// create a new board array filled with cell-like objects
const emptyBoardArray = Create2DBoardArray({
  w: boardWidth,
  h: boardHeight,
  clicked: OnCellClick,
});
// identify which cells to become mines
const mineList = ExtractMultipleCells({
  array: emptyBoardArray,
  mineCount: numberOfMines,
});
// insert mines into the board array
const boardArrayWithMines = PopulateMines( {array: emptyBoardArray, mineList} );
// count neigbouring mines in each cell
const filledBoardArray = CheckNeighbourValues ( {array: boardArrayWithMines} );

// simulate click foramt
 // filledBoardArray[1][1].clicked( {cell: filledBoardArray[1][1], boardArray: filledBoardArray} );

/*
------------------------------------------------------------------------------------------
      grid views
------------------------------------------------------------------------------------------
*/

let view_grid = "\n";
for (let i = 0; i < filledBoardArray.length; i++) {
  for (let j = 0; j < filledBoardArray[i].length; j++) {
    let r = (' ' + filledBoardArray[i][j].column + ',' + filledBoardArray[i][j].row + ' ' );
    view_grid = (view_grid + r);
  }
  view_grid = (view_grid + '\n')
}

let view_mine = "\n";
for (let i = 0; i < filledBoardArray.length; i++) {
  for (let j = 0; j < filledBoardArray[i].length; j++) {
    let r = (' ' + (filledBoardArray[i][j].isMine ? 'M' : '-') + ' ' );
    view_mine = (view_mine + r);
  }
  view_mine = (view_mine + '\n');
}

let view_neighbour = "\n";
for (let i = 0; i < filledBoardArray.length; i++) {
  for (let j = 0; j < filledBoardArray[i].length; j++) {
    let r = (' ' + filledBoardArray[i][j].neighbours + ' ' );
    view_neighbour = (view_neighbour + r);
  }
  view_neighbour = (view_neighbour + '\n');
}
