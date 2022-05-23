import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props) => {
  const { title } = props;
  const MainTable = () => 
    <table>
      <TableHead />
      <TableBody />
    </table>;

  return <>
    <h1>{ title }</h1>
    { props.rows && <MainTable /> }
  </>;
}

export default Table;