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

  const checkEmptyTable = () => {
    if(rows.length) return <MainTable />;
    return <NoContentInTable />;
  }

  return <>
    <h1>{ title }</h1>
    { checkEmptyTable() }
  </>;
}

export default Table;