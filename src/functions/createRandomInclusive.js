// recieves a minimum and maximum values and returns a random number which is inclusive of the min/max
export const CreateRandomInclusive = ({ min, max }) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};
