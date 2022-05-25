import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';

const WithProtected = Component => props => {
  const { isProtected, ...properties } = props;
  return !isProtected ? <Component {...properties} /> 
    : <span>El componente está protegido...</span>      
}

const ProtectedTable = WithProtected(Table);

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const rows = [
    {"id": 1, "name": "España"}, 
    {"id": 2, "name": "Andorra"},
    {"id": 3, "name": "Portugal"}
  ];

  return <>
    <h1>React Course</h1>
    <ProtectedTable isProtected={ true }>
      <TableHead>
        <TableColumns columns={ columns } />
      </TableHead>
      <TableBody rows={ rows } />
    </ProtectedTable>
  </>;
}

export default App;