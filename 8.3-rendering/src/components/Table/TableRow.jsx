const TableRow = ({ row }) => 
  <tr>
    { Object.keys(row).map((key) => <td key={ key }>{ row[key] }</td>) }
  </tr>;

export default TableRow;