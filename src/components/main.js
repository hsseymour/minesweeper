import { useState } from "react"
import { CreateDifficulty } from "./difficulty";
import { CreateBoard } from "./board";
import { CreateTimer } from "./timer";

export const CreateMain = () => {
    const [gameState, SetGameState] = useState(0);

    const UpdateGameState = ( {gameState} ) => {
        SetGameState(parseInt(gameState));
    }

    return (
        <section className="mainSection">
            <header>
                <h1 className="mainH1">Minesweeper</h1>
            </header>

            {gameState === 0 && <CreateDifficulty setGameState={UpdateGameState} />}
            {(gameState > 0 && gameState < 4) && <CreateBoard gameState={gameState} />}
            {(gameState > 0 && gameState < 4) && <CreateTimer />}
            {gameState === 4}
        </section>
    )
}
