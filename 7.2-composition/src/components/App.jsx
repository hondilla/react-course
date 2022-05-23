import Header from './Header/Header';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';

const WithProtected = Component => props => {
  const { isProtected, ...properties } = props;
  return !isProtected ? <Component {...properties} /> 
    : <div>El componente está protegido...</div>      
}

const ProtectedTable = WithProtected(Table);

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
      <ProtectedTable isProtected={ true }>
        <TableHead>
          <TableColumns columns={ columns } />
        </TableHead>
        <TableBody rows={ rows } />
      </ProtectedTable>
    </div>
  </>
}

export default App;