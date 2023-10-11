import { CreateCell } from "./createCell";

export const CreateRow = ({ row, boardArray, setGameState }) =>
  row.map((cell, index) => (
    <td key={index}>
      <CreateCell
        cell={cell}
        boardArray={boardArray}
        setGameState={setGameState}
      />
    </td>
  ));
