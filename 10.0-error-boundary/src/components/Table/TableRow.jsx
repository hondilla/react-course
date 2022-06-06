const Image = ({ url }) => <img width="50" src={url} />;

const fieldType = value => {
  if(value.toString().endsWith(".svg")) return <Image url={ value } />;
  return value ?? '-';
}

const TableRow = ({ row, setModalState }) => {
  const onClickHandler = () => {
    setModalState({isOpen: true, country: row})
  }

  return <tr onClick={onClickHandler}>
    { Object.keys(row).map((key) => <td key={ key }>{ fieldType(row[key]) }</td>) }
  </tr>;
}
  
export default TableRow;