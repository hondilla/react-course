import Header from './Header/Header';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const rows = [
    {"id": 1, "name": "Spain"}, 
    {"id": 2, "name": "Andorra"},
    {"id": 3, "name": "Portugal"}
  ];

  return <>
    <Header title="React Course" />
    <div className="container">
      <Table>
        <TableHead>
          <TableColumns columns={ columns } />
        </TableHead>
        <TableBody rows={ rows } />
      </Table>
    </div>
  </>
}

export default App;