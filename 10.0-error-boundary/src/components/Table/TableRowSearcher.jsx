import { useEffect, useRef } from "react"
import TableRowSearcherInput from "./TableRowSearcherInput";

const TableRowSearcher = ({ setSearch }) => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const onClickHandler = () => {
    setSearch(searchRef.current.value);
  }

  return <div className="input-group mb-3">
    <TableRowSearcherInput ref={ searchRef } />      
    <div className="input-group-append">
      <input 
        className="btn btn-outline-secondary" 
        type="button" 
        onClick={ onClickHandler }
        value="Buscar" />
    </div>
  </div>
}

export default TableRowSearcher;