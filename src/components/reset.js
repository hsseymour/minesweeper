import { useContext } from "react";
import { GameStateContext } from "../globalManagement/gameStateContext";

export const CreateReset = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setGameState] = useContext(GameStateContext);

  const ResetGame = () => {
    setGameState(0);
  };

  return (
    <button
      className="resetButton"
      type="button"
      onClick={() => {
        ResetGame();
      }}
    >
      RESET
    </button>
  );
};
