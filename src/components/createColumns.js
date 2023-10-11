import { CreateRow } from "./createRow";

export const CreateColumns = ({ columns, setGameState }) =>
  columns.map((row, index) => (
    <tr key={index}>
      <CreateRow row={row} boardArray={columns} setGameState={setGameState} />
    </tr>
  ));
