import { useContext } from "react";
import { GameStateContext } from "../globalManagement/gameStateContext";

export const CreateReset = ({ setDifficulty }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setGameState] = useContext(GameStateContext);

  const ResetGame = () => {
    setGameState(0);
    setDifficulty(null);
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
