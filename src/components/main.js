import { useState } from "react"
import { CreateDifficulty } from "./difficulty";
import { CreateBoard } from "./board";
import { CreateTimer } from "./timer";

export const CreateMain = () => {
    [gameState, SetGameState] = useState(0);

    const UpdateGameState = (gameState) => {
        SetGameState(parseInt(gameState));
    }

    return (
        <section>
            <header>
                <h1>MineSweeper</h1>
            </header>

            {gameState === 0 && <CreateDifficulty />}
            {(gameState > 0 && gameState < 4) && <CreateBoard />}
            {(gameState > 0 && gameState < 4) && <CreateTimer />}
            {gameState === 4}
        </section>
    )
}
