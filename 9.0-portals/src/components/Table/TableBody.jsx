import TableRow from "./TableRow";

const TableBody = ({ rows, setModalState }) =>
  <tbody>
    { rows.map(row => <TableRow key={ row.id } row={ row } setModalState={ setModalState } />) }
  </tbody>;

export default TableBody;