import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ title, rows, columns }) => 
  <>
    <h1>{ title }</h1>
    <table>
      <TableHead columns={ columns } />
      <TableBody rows={ rows } />
    </table>
  </>;

export default Table;