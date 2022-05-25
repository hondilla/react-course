import TableRow from "./TableRow";

const TableBody = ({ rows }) => {
  if(!rows) { return null; }

  return <tbody>
    { rows.map(row => <TableRow key={ row.id } row={ row } />) }
  </tbody>;
}

export default TableBody;