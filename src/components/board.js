import { InitaliseBoard } from "../functions/initialiseBoard";
import { CreateColumns } from "./createColumns";

export const CreateBoard = ( {gameState, setGameState} ) => {
    let setBoardArray;
    if (gameState === 1) { setBoardArray = InitaliseBoard( {boardHeight: 8, boardWidth: 8, numberOfMines: 10} ); }
    else if (gameState === 2) { setBoardArray = InitaliseBoard( {boardHeight: 16, boardWidth: 16, numberOfMines: 40} ); }
    else if (gameState === 3) { setBoardArray = InitaliseBoard( {boardHeight: 30, boardWidth: 16, numberOfMines: 99} ); }
    const boardArray = setBoardArray;

    return (
        <div>
            <table className="boardTable">
                <tbody>
                    <CreateColumns columns={boardArray} setGameState={setGameState} gameState={gameState} />
                </tbody>
            </table>
        </div>
    );
}
