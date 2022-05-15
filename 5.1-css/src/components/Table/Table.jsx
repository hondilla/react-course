import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ title }) => <>
  <h1>{ title }</h1>
  <table style={{ backgroundColor: 'aqua' }}>
    <TableHead />
    <TableBody />
  </table>
</>;

export default Table;