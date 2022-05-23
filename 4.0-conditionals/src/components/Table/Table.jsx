import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ title, rows }) => {
  const MainTable = () => 
    <table>
      <TableHead />
      <TableBody />
    </table>;

  const NoContentInTable = () => 
    <span>La tabla está vacia.</span>;

  return <>
    <h1>{ title }</h1>
    { rows.length ? <MainTable /> : <NoContentInTable /> }
  </>;
}

export default Table;