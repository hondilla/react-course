import Header from './Header/Header';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableColumnsSelector from './Table/TableColumnsSelector';
import TableHead from './Table/TableHead';
import TableRowSearcher from './Table/TableRowSearcher';
import { useColumns } from "../hooks/useColumns";
import { useRows } from "../hooks/useRows";
import { useCountries } from '../hooks/useCountries';

const App = () => {
  const initialColumns = [
    {"name": "Id", "alias": "id", "isVisible": true},
    {"name": "Nombre", "alias": "name", "isVisible": true}
  ];
  const [isLoading, countries, setSearch] = useCountries();
  const [
    columns, 
    dispatch, 
    visibleColumns, 
    excludedColumns
  ] = useColumns(initialColumns);
  const filteredRows = useRows(countries, excludedColumns);

  return <>
    <Header title="React Course" />
    <div className="container">
      <TableRowSearcher setSearch={ setSearch } />
      <TableColumnsSelector columns={ columns } dispatch={ dispatch } />
      { !isLoading ? <Table>
        <TableHead>
          <TableColumns columns={ visibleColumns } />
        </TableHead>
        <TableBody rows={ filteredRows } />
      </Table> : <span>Cargando...</span> }
    </div>
  </>
}

export default App;