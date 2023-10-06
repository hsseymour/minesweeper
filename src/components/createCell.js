export const CreateCell = ( {cell} ) => {
    console.debug(cell);
    return <button>{cell.row},{cell.column}</button>;
}
