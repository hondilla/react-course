import { useState } from 'react';
import { useCountries } from '../hooks/useCountries';
import Header from './Header/Header';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableColumnsSelector from './Table/TableColumnsSelector';
import TableHead from './Table/TableHead';

const App = () => {
  const [columns, setColumns] = useState([ 
    {"name": "Id", "alias": "id", "isVisible": true},
    {"name": "Nombre", "alias": "name", "isVisible": true} 
  ]);
  const rows = useCountries();

  return <>
    <Header title="React Course" />
    <div className="container">
      <TableColumnsSelector columns={ columns } setColumns={ setColumns } />
      <Table>
        <TableHead>
          <TableColumns columns={ columns } />
        </TableHead>
        <TableBody columns={ columns } rows={ rows } />
      </Table>
    </div>
  </>
}

export default App;