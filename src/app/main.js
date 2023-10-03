import { CreateBoard } from "./board";
import { useState } from "react";
import { ChooseDifficulty } from "./difficulty";


export const Main = () => { 

    const [difficulty, SetDifficulty] = useState(false);

    const UpdateDifficulty = (difficulty) => {
        SetDifficulty(difficulty);
    }

    return (
        <>
            
            {!difficulty && <ChooseDifficulty setdifficulty={UpdateDifficulty}/>}

            {difficulty && <CreateBoard difficulty={difficulty} />}
           
        </>
    );
}