// recieves an empty board array and an array of cell-like objects to become mines and returns an a board array with mines included
export const PopulateMines = ({ array, mineList }) => {
  const populatedArray = Array.from(array);
  mineList.forEach((mine) => {
    populatedArray[mine.column][mine.row].isMine = true;
  });
  return populatedArray;
};
