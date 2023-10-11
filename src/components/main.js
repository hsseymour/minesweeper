import { useState } from "react";
import { CreateDifficulty } from "./difficulty";
import { CreateBoard } from "./board";
import { CreateTimer } from "./timer";
import { CreateReset } from "./reset";

export const CreateMain = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [gameState, setGameState] = useState(1);

  const getGameState = () => {
    return gameState;
  };

  return (
    <section className="mainSection">
      <header>
        <h1 className="mainH1">Minesweeper</h1>
      </header>
      {!difficulty && <CreateDifficulty setDifficulty={setDifficulty} />}
      {difficulty && (
        <CreateBoard difficulty={difficulty} setGameState={setGameState} />
      )}
      {difficulty && <CreateTimer getGameState={getGameState} />}
      {difficulty && (
        <CreateReset reset={setDifficulty} setGameState={setGameState} />
      )}
      {gameState === 2 && <h1>GameOver</h1>}
    </section>
  );
};
