import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const rows = [];

  const NoContentInTable = () => 
    <span>La tabla está vacia.</span>;

  const checkEmptyTable = () => {
    if(!rows.length) { return <NoContentInTable />; }
    return <Table>
      <TableHead>
        <TableColumns columns={ columns } />
      </TableHead>
      <TableBody rows={ rows } />
    </Table>;
  }

  return <>
    <h1>React Course</h1>
    { checkEmptyTable() }
  </>;
}

export default App;