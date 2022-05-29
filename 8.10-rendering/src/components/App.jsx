import Header from './Header/Header';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableColumnsSelector from './Table/TableColumnsSelector';
import TableHead from './Table/TableHead';
import TableRowSearcher from './Table/TableRowSearcher';
import { useCountries } from '../hooks/useCountries';
import StateProvider from '../context/StateProvider';

const Contexted = Component => props => 
  <StateProvider>
    <Component {...props} />
  </StateProvider>;

const App = () => {
  const [isLoading, setSearch] = useCountries();

  return <>
    <Header title="React Course" />
    <div className="container">
        <TableRowSearcher setSearch={ setSearch } />
        <TableColumnsSelector />
        { !isLoading ? <Table>
          <TableHead>
            <TableColumns />
          </TableHead>
          <TableBody />
        </Table> : <span>Cargando...</span> }
    </div>
  </>
}

export default Contexted(App);