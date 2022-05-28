const TableRow = ({ row, columns }) => {
  const visibleColumns = columns.filter(({isVisible}) => isVisible === true);
  
  return <tr>
    { visibleColumns.map(({ name, alias }) => <td key={ name }>{ row[alias] }</td>) }
  </tr>;
}

export default TableRow;