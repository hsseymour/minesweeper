import { CreateCell } from "./createCell";

export const CreateRow = ( {row} ) => row.map((cell, index) =>
    <td key={index}>
        <CreateCell cell={cell} />
    </td>
);
