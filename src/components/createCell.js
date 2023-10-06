import { useState, useEffect } from "react";

export const CreateCell = ( {cell, boardArray} ) => {
    useEffect(() => {
        cell.addFunc = SetButtonState;
    },[cell]);

    const [buttonState, SetButtonState] = useState(false);

    return (
        <button
            className={"boardCell cellRevealed-" + buttonState +  " cell-" + cell.neighbours}
            type="button"
            onClick={() => {
                console.debug(cell);
                cell.clicked( {cell, boardArray, func: SetButtonState} );
            }}
            disabled={buttonState}
        >
            {/* {cell.row},{cell.column} */}
            {/* {cell.neighbours} */}
            {buttonState && cell.neighbours}
        </button>
    );
}
