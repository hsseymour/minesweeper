export const CreateDifficulty = ({ setDifficulty }) => {
  return (
    <div>
      <h3 className="difficultyHeader">Choose difficulty:</h3>
      <button
        type="button"
        className="difficultyButton"
        value={1}
        onClick={(e) => setDifficulty(e.target.value)}
      >
        Easy
      </button>
      <button
        type="button"
        className="difficultyButton"
        value={2}
        onClick={(e) => setDifficulty(e.target.value)}
      >
        Medium
      </button>
      <button
        type="button"
        className="difficultyButton"
        value={3}
        onClick={(e) => setDifficulty(e.target.value)}
      >
        Hard
      </button>
    </div>
  );
};
