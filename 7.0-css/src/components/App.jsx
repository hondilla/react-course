import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';
import '../styles.scss';

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const rows = [
    {"id": 1, "name": "España"}, 
    {"id": 2, "name": "Andorra"},
    {"id": 3, "name": "Portugal"}
  ];

  return <>
    <h1>React Course</h1>
    <Table>
      <TableHead>
        <TableColumns columns={ columns } />
      </TableHead>
      <TableBody rows={ rows } />
    </Table> 
  </>;
}

export default App;