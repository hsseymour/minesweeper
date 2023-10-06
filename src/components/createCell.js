import { useState, useEffect } from "react";

export const CreateCell = ( {cell, boardArray, setGameState, gameState} ) => {
    useEffect(() => {
        cell.addFunc = SetButtonState;
    },[cell]);

    const [buttonState, SetButtonState] = useState(false);
    const [flagState, SetFlagState] = useState(false);

    const GameOver = () => {
        // setGameState( {gameState: 4} );
    }

    return (
        <button
            className={"boardCell cellRevealed-" + buttonState +  " cell-" + cell.neighbours + " cellFlagged-" + flagState}
            type="button"
            onClick={() => {
                cell.clicked( {cell, boardArray, func: SetButtonState} );
                if (cell.isMine) { GameOver(); }
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                if (!buttonState) {
                    cell.isFlagged = !cell.isFlagged;
                    SetFlagState(cell.isFlagged);
                }
            }}
            disabled={buttonState || flagState || gameState === 4}
        >
            {/* {cell.row},{cell.column} */}
            {/* {cell.neighbours} */}
            {buttonState ? cell.neighbours : flagState ? '✖' : ''}

        </button>
    );
}
