const Image = ({ url }) => <img width="50" src={url} />;

const fieldType = value => {
  if(typeof value === 'string' && value.toString().endsWith(".svg")) return <Image url={ value } />;
  return value ?? '-';
}

const TableRow = ({ row }) => 
  <tr>
    { Object.keys(row).map((key) => <td key={ key }>{ fieldType(row[key]) }</td>) }
  </tr>;

export default TableRow;