import { Create2DBoardArray } from "./create2DBoardArray";
import { ExtractMultipleCells } from "./extractMultipleCells";
import { PopulateMines } from "./populateMines";
import { CheckNeighbourValues } from "./checkNeighbourValues";
import { OnCellClick } from "./onCellClick";

export const InitaliseBoard = ({ boardWidth, boardHeight, numberOfMines }) => {
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
  const boardArrayWithMines = PopulateMines({
    array: emptyBoardArray,
    mineList,
  });

  // count neigbouring mines in each cell
  const filledBoardArray = CheckNeighbourValues({ array: boardArrayWithMines });

  return filledBoardArray;
};
