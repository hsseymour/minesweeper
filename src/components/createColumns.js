import { CreateRow } from "./createRow";

export const CreateColumns = ({ columns }) =>
  columns.map((row, index) => (
    <tr key={index}>
      <CreateRow row={row} boardArray={columns} />
    </tr>
  ));
