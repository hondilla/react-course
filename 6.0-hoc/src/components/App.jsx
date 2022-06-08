import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';
import WithProtected from './WithProtected/WithProtected';
import countries from '../countries.json';

const ProtectedTable = WithProtected(Table);

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const rows = () => countries.reduce((acc, country) => {
    if(country.population >= 100000) {
      acc.push({
        "id": country.cca2,
        "name": country.name.common
      });
    }
    return acc;
  }, []);

  return <>
    <h1>React Course</h1>
    <ProtectedTable isProtected={ false }>
      <TableHead>
        <TableColumns columns={ columns } />
      </TableHead>
      <TableBody rows={ rows() } />
    </ProtectedTable>
  </>;
}

export default App;