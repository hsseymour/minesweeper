import { CreateCell } from "./createCell";

export const CreateRow = ({ row, boardArray }) =>
  row.map((cell, index) => (
    <td key={index}>
      <CreateCell cell={cell} boardArray={boardArray} />
    </td>
  ));
