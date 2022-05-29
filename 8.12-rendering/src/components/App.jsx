import { useState } from 'react';

import TableBody from './Table/TableBody';
import TableHead from './Table/TableHead';
import TableColumns from './Table/TableColumns';
import Header from './Header/Header';
import Table from './Table/Table';
import TableInputButton from './Table/TableInputButton';

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const [rows, setRows] = useState([]);

  return <>
    <Header title="React Course" />
    <div className="container">
      <TableInputButton setRows={ setRows } />
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