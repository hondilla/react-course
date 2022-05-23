import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props) => {
  if(!props.rows) { return null; }
  const { title } = props;

  return <>
    <h1>{ title }</h1>
    <table>
      <TableHead />
      <TableBody />
    </table>
  </>;
}

export default Table;