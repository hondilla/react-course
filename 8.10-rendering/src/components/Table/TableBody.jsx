import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import TableRow from "./TableRow";

const TableBody = () => {
  const { state } = useContext(StateContext);
  return <tbody>
    { state.rows.map(row => <TableRow key={ row.id } row={ row } />) }
  </tbody>;
}


export default TableBody;