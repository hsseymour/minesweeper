import { useState, useEffect } from "react";

export const CreateCell = ( {cell, boardArray} ) => {
    useEffect(() => {
        cell.addFunc = SetButtonState;
    },[cell]);

    const [buttonState, SetButtonState] = useState(false);
    const [flagState, SetFlagState] = useState(false);

    return (
        <button
            className={"boardCell cellRevealed-" + buttonState +  " cell-" + cell.neighbours + " cellFlagged-" + flagState}
            type="button"
            onClick={() => {
                cell.clicked( {cell, boardArray, func: SetButtonState} );
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                if (!buttonState) {
                    cell.isFlagged = !cell.isFlagged;
                    SetFlagState(cell.isFlagged);
                }
            }}
            disabled={buttonState || flagState}
        >
            {/* {cell.row},{cell.column} */}
            {/* {cell.neighbours} */}
            {buttonState ? cell.neighbours : flagState ? '✖' : ''}

        </button>
    );
}
