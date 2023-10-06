import { CheckNeighbourCell } from './checkNeighbourCell';

// recieves a board array and returns an array with neigbour values updated
export const CheckNeighbourValues = ({ array }) => {
    const filledArray = Array.from(array);
    filledArray.forEach((column) => {
        column.forEach((cell) => {
            const neighbours = CheckNeighbourCell( {array, cell} );
            cell.neighbours = neighbours;
            return cell;
        });
    });
    return filledArray;
}
