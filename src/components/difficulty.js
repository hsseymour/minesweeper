export const CreateDifficulty = ( {setGameState} ) => {

    const UpdateGameState = ( {gameState} ) => {
        setGameState( {gameState} );
    }

    return (
        <div>
            <h3 className="difficultyHeader">Choose difficulty:</h3>
            <button type='button' className="difficultyButton" value={1} onClick={(e) => UpdateGameState( {gameState: e.target.value} )}>Easy</button>
            <button type='button' className="difficultyButton" value={2} onClick={(e) => UpdateGameState( {gameState: e.target.value} )}>Medium</button>
            <button type='button' className="difficultyButton" value={3} onClick={(e) => UpdateGameState( {gameState: e.target.value} )}>Hard</button>
        </div>
    );
}
