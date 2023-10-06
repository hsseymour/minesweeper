import { ConvertTo1D } from './convertTo1D';
import { GetRandomElementFromArray } from './getRandomElementFromArray';

// recieves an array of arrays and target number of mines and returns a random array of cells
export const ExtractMultipleCells = ({ array, mineCount }) => {
    const extractedArray = ConvertTo1D({ array });

    return new Array(mineCount).fill().reduce((acc, curr) => {
        const { element, slicedArray } = GetRandomElementFromArray( {array: acc.extractedArray} );
        return {elements: [...acc.elements, element], extractedArray: slicedArray};
    },{ elements: [], extractedArray }).elements;
}
