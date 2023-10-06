// recieves width, hight, and a click function and returns an array of arrays containing cell-like objects with assigned column and row values
export const Create2DBoardArray = ({ w, h, clicked }) => {
    const boardArray = Array.from({ length: h }, (value, index) => index).map(
        (column) => {
            return Array.from({ length: w }, (value, index) => index).map((row) => {
                return {
                    column: column,
                    row: row,
                    isMine: false,
                    neighbours: null,
                    isRevealed: false,
                    isFlagged: false,
                    clicked: ( {cell, boardArray} ) => {clicked( {cell, boardArray} ); },
                    addfunc: null
                };
            });
        }
    );
    return boardArray;
}
