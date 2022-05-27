import Header from './Header/Header';
import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableColumnsSelector from './Table/TableColumnsSelector';
import TableHead from './Table/TableHead';
import { useColumns } from "../hooks/useColumns";
import { useRows } from "../hooks/useRows";

const initialColumns = [
  {"name": "Id", "alias": "id", "isVisible": true},
  {"name": "Nombre", "alias": "name", "isVisible": true}
];
const initialRows = [
  {"id": 1, "name": "España"},
  {"id": 2, "name": "Andorra"},
  {"id": 3, "name": "Portugal"}
];

const App = () => {
  const [
    columns, 
    setColumns, 
    visibleColumns, 
    excludedColumns
  ] = useColumns(initialColumns);
  const rows = useRows(initialRows, excludedColumns);

  return <>
    <Header title="React Course" />
    <div className="container">
      <TableColumnsSelector columns={ columns } setColumns={ setColumns } />
      <Table>
        <TableHead>
          <TableColumns columns={ visibleColumns } />
        </TableHead>
        <TableBody rows={ rows } />
      </Table>
    </div>
  </>
}

export default App;