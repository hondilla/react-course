import { useCountries } from '../hooks/useCountries';
import Header from './Header/Header';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const rows = useCountries();

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