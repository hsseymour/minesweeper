export const CreateCell = ( {cell, boardArray} ) => {

    return (
        <button
            className="boardCell"
            type="button"
            onClick={() => {
                console.debug(cell);
                cell.clicked( {cell, boardArray} );
            }}
        >
            {cell.row},{cell.column}
        </button>
    );
}
