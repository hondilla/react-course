import { useContext } from "react";
import { TableContext } from "../../context/TableProvider";

const TableColumns = () => {
  const { columns } = useContext(TableContext);

  return <tr>
    { columns.map(({name}) => <th key={ name }>{ name }</th>) }
  </tr>;
}

export default TableColumns;