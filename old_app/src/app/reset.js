import { useEffect } from "react";

export const CreateResetButton = (props) => { 

    let SetGameState = (gameState) => { props.setGameState(gameState); }

    useEffect(() => {
        let resetButton = document.getElementById('resetButtonDiv').querySelector("button");
        resetButton.addEventListener('click', () => { 
            SetGameState(0);
        });
    });

    return (
        <div id="resetButtonDiv">
            <button type="button">RESET</button>
        </div>
    );
}