import { useEffect } from "react";
import TableRow from "./TableRow";

const TableBody = ({ rows }) => {
  useEffect(() => console.log('<TableBody />'));

  return <tbody>
    { rows.map((row) => <TableRow key={ row.id } row={ row }/>) }
  </tbody>;
}

export default TableBody;