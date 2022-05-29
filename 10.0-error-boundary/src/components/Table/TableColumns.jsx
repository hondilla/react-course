const TableColumns = ({ columns }) => 
  <tr>
    { columns.map(({name}) => <th key={ name }>{ name }</th>) }
  </tr>;

export default TableColumns;