import { useState } from "react";
import { ChooseDifficulty } from "./difficulty";
import { CreateBoard } from "./board";
import { CreateTimer } from "./timer";
import { CreateResetButton } from "./reset";
import { CreateTest } from "./test";
import { type } from "@testing-library/user-event/dist/type";

export const Main = () => { 

    const [gameState, SetGameState] = useState(0);

    const UpdateGameState = (gameState) => {
        SetGameState(parseInt(gameState));
    }

    return (
        <>
            <section id="main">
                <header>
                    <h1>Minesweeper</h1>
                </header>

                {gameState === 0 ?  <ChooseDifficulty setdifficulty={UpdateGameState}/> : null}

                {(gameState >= 1 && gameState <=4) ? <CreateBoard difficulty={gameState} setGameState={UpdateGameState} /> : null}

                {(gameState >= 1 && gameState <=4) ? <CreateTimer gameState={gameState} /> : null} 

                {(gameState >= 1 && gameState <=4) ? <CreateResetButton setGameState={UpdateGameState} /> : null} 

                {/* {<CreateTest x={gameState} />} */}

            </section>
        </>
    );
}