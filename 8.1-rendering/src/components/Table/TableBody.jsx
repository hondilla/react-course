import TableRow from "./TableRow";

const TableBody = ({ rows, columns }) =>
  <tbody>
    { rows.map(row => <TableRow key={ row.id } row={ row } columns={ columns } />) }
  </tbody>;

export default TableBody;