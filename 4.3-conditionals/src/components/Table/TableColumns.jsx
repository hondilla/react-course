const TableColumns = ({ columns }) => 
  <tr>
    { columns.map(column => <th key={ column }>{ column }</th>) }
  </tr>;

export default TableColumns;