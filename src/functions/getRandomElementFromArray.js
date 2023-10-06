// recieves an array and returns a random element from an array and the sliced array
export const GetRandomElementFromArray = ({ array }) => {
    const rnd = Math.floor(Math.random() * array.length);
    const rndElement = { ...array[rnd] };
    const slicedArray = [...array.slice(0, rnd), ...array.slice(rnd + 1)];
    return { element: rndElement, slicedArray };
}
