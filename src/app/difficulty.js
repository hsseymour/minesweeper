import { useEffect } from "react";

export const ChooseDifficulty = (props) => { 
    useEffect(() => {
        let difficultyChoices = document.getElementById('selectDifficultyDiv').querySelectorAll("button");
        difficultyChoices.forEach(element => {
            element.addEventListener('click', () => { 
                let difficulty = element.value;
                props.setdifficulty(difficulty);
            });
        });
    });

    return (
        <div id="selectDifficultyDiv">
            <h3>Select difficulty</h3>
            <button value={1}>Easy</button>
            <button value={2}>Medium</button>
            <button value={3}>Hard</button>
        </div>
    );
}