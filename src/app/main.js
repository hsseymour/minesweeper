import { useState } from "react";
import { ChooseDifficulty } from "./difficulty";
import { CreateBoard } from "./board";
import { CreateTimer } from "./timer";

export const Main = () => { 

    const [difficulty, SetDifficulty] = useState(false);

    const UpdateDifficulty = (difficulty) => {
        SetDifficulty(difficulty);
    }

    return (
        <>
            
            <section id="main">
                <header>
                    <h1>Minesweeper</h1>
                </header>

                {!difficulty && <ChooseDifficulty setdifficulty={UpdateDifficulty}/>}

                {difficulty && <CreateBoard difficulty={difficulty} />}

                {/*  {difficulty && <CreateTimer />} */}
            </section>
        </>
    );
}