import { useEffect } from "react";

export const ChooseDifficulty = (props) => { 
    useEffect(() => {
        let difficultyChoices = document.getElementById('selectDifficultyDiv').querySelectorAll("button");
        difficultyChoices.forEach(element => {
            element.addEventListener('click', () => { 
                let difficulty = element.value;
                props.setdifficulty(difficulty);
                //document.getElementById('selectDifficultyDiv').remove();
            });
        });
    });

    return (
        <div id="selectDifficultyDiv">
            <h1>Select difficulty</h1>
            <button value='e'>Easy</button>
            <button value='m'>Medium</button>
            <button value='h'>Hard</button>
        </div>
    );
}