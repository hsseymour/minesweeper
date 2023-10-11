import { useState } from "react";
import { CreateDifficulty } from "./difficulty";
import { CreateBoard } from "./board";
import { CreateTimer } from "./timer";
import { CreateReset } from "./reset";
import { GameStateContext } from "../globalManagement/gameStateContext";

export const CreateMain = () => {
  const gameState = useState(0);
  const [difficulty, setDifficulty] = useState(null);

  return (
    <section className="mainSection">
      <header>
        <h1 className="mainH1">Minesweeper</h1>
      </header>

      <GameStateContext.Provider value={gameState}>
        {difficulty && gameState[0] === 2 && (
          <h1 className="gameOverH1">GameOver</h1>
        )}
        {gameState[0] === 0 && (
          <CreateDifficulty setDifficulty={setDifficulty} />
        )}
        {difficulty && <CreateBoard difficulty={difficulty} />}
        {difficulty && <CreateTimer />}
        {difficulty && <CreateReset setDifficulty={setDifficulty} />}
      </GameStateContext.Provider>
    </section>
  );
};
