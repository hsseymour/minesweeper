import { useContext } from "react";
import { GameStateContext } from "../globalManagement/gameStateContext";

export const CreateDifficulty = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setGameState] = useContext(GameStateContext);

  return (
    <div>
      <h3 className="difficultyHeader">Choose difficulty:</h3>
      <button
        type="button"
        className="difficultyButton"
        value={1}
        onClick={(e) => setGameState(+e.target.value)}
      >
        Easy
      </button>
      <button
        type="button"
        className="difficultyButton"
        value={2}
        onClick={(e) => setGameState(+e.target.value)}
      >
        Medium
      </button>
      <button
        type="button"
        className="difficultyButton"
        value={3}
        onClick={(e) => setGameState(+e.target.value)}
      >
        Hard
      </button>
    </div>
  );
};
