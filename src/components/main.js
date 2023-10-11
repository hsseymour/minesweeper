import { useState } from "react";
import { CreateDifficulty } from "./difficulty";
import { CreateBoard } from "./board";
import { CreateTimer } from "./timer";
import { CreateReset } from "./reset";
import { GameStateContext } from "../globalManagement/gameStateContext";

export const CreateMain = () => {
  const gameState = useState(0);

  return (
    <section className="mainSection">
      <header>
        <h1 className="mainH1">Minesweeper</h1>
      </header>

      <GameStateContext.Provider value={gameState}>
        {gameState[0] === 0 && <CreateDifficulty />}
        {gameState[0] >= 1 && gameState[0] <= 3 && <CreateBoard />}
        {gameState[0] >= 1 && gameState[0] <= 4 && <CreateTimer />}
        {gameState[0] >= 1 && gameState[0] <= 4 && <CreateReset />}
        {gameState === 4 && <h1>GameOver</h1>}
      </GameStateContext.Provider>
    </section>
  );
};
