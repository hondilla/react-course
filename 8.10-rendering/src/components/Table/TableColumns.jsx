import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const TableColumns = () => {
  const { state } = useContext(StateContext);
  return <tr>
    { state.visibleColumns.map(({name}) => <th key={ name }>{ name }</th>) }
  </tr>;
}


export default TableColumns;