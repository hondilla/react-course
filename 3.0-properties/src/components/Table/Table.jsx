import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props) => 
  <>
    <h1>{ props.title }</h1>
    <table>
      <TableHead />
      <TableBody />
    </table>
  </>;

export default Table;