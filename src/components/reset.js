export const CreateReset = ({ reset, setGameState }) => {
  const ResetGame = () => {
    setGameState(null);
    reset(0);
  };

  return (
    <button
      className="resetButton"
      type="button"
      onClick={() => {
        ResetGame();
      }}
    >
      RESET
    </button>
  );
};
