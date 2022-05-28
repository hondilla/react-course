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
import TableProvider from '../context/TableProvider';

const App = () => {
  const initialColumns = [
    {"name": "Id", "alias": "id", "isVisible": true},
    {"name": "Nombre", "alias": "name", "isVisible": true}
  ];
  const [isLoading, countries, setSearch] = useCountries();
  const [
    columns, 
    setColumns, 
    visibleColumns, 
    excludedColumns
  ] = useColumns(initialColumns);
  const filteredRows = useRows(countries, excludedColumns);

  return <>
    <Header title="React Course" />
    <div className="container">
      <TableRowSearcher setSearch={ setSearch } />
      <TableColumnsSelector columns={ columns } setColumns={ setColumns } />
      <TableProvider rows={ filteredRows } columns={ visibleColumns }>
        { !isLoading ? 
            <Table>
              <TableHead>
                <TableColumns />
              </TableHead>
              <TableBody />
            </Table> 
          : <span>Cargando...</span> }
      </TableProvider>
    </div>
  </>
}

export default App;