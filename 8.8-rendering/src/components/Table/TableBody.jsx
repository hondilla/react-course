import { useContext } from "react";
import { TableContext } from "../../context/TableProvider";
import TableRow from "./TableRow";

const TableBody = () => {
  const { rows } = useContext(TableContext);

  return <tbody>
    { rows.map(row => <TableRow key={ row.id } row={ row } />) }
  </tbody>;
}

export default TableBody;