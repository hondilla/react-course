const TableColumns = ({ columns }) => {
  const visibleColumns = columns.filter(({isVisible}) => isVisible === true);

  return <tr>
    { visibleColumns.map(({ name }) => <th key={ name }>{ name }</th>) }
  </tr>;
}

export default TableColumns;