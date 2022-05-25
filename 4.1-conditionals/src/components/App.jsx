import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const rows = [];

  const NoContentInTable = () => 
    <span>La tabla está vacia.</span>;

  return <>
    <h1>React Course</h1>
    { 
      !rows.length 
      ? <NoContentInTable /> 
      : <Table>
          <TableHead>
            <TableColumns columns={ columns } />
          </TableHead>
          <TableBody rows={ rows } />
        </Table> 
    }
  </>;
}

export default App;