import TableRow from "./TableRow";

const TableBody = ({ rows }) => 
  <tbody>
    { rows.map(row => <TableRow key={ row.id } row={ row } />) }
  </tbody>;

export default TableBody;