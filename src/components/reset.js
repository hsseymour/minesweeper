export const CreateReset = ( {reset} ) => {

    const ResetGame = () => {
        reset( {gameState: 0} );
    }

    return (
        <button className="resetButton" type="button" onClick={() => {ResetGame()} }>RESET</button>
    );
}
