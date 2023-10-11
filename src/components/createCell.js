import { useState, useEffect, useContext } from "react";
import { GameStateContext } from "../globalManagement/gameStateContext";

export const CreateCell = ({ cell, boardArray }) => {
  useEffect(() => {
    cell.addFunc = SetButtonState;
  }, [cell]);

  // eslint-disable-next-line no-unused-vars
  const [_, setGameState] = useContext(GameStateContext);
  const [buttonState, SetButtonState] = useState(false);
  const [flagState, SetFlagState] = useState(false);

  return (
    <button
      className={
        "boardCell cellRevealed-" +
        buttonState +
        " cell-" +
        cell.neighbours +
        " cellFlagged-" +
        flagState
      }
      type="button"
      onClick={() => {
        cell.clicked({ cell, boardArray, func: SetButtonState });
        if (cell.isMine) {
          setGameState(4);
        }
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        if (!buttonState) {
          cell.isFlagged = !cell.isFlagged;
          SetFlagState(cell.isFlagged);
        }
      }}
      disabled={buttonState || flagState}
    >
      {/* {cell.row},{cell.column} */}
      {/* {cell.neighbours} */}
      {buttonState ? cell.neighbours : flagState ? "✖" : ""}
    </button>
  );
};
