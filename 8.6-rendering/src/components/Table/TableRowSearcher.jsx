import { useEffect, useRef } from "react"

const TableRowSearcher = ({ setSearch }) => {
  const search = useRef();

  useEffect(() => {
    search.current.focus();
  }, []);

  const onClickHandler = () => {
    setSearch(search.current.value);
  }

  return <div className="input-group mb-3">
    <input 
      type="text" 
      className="form-control" 
      placeholder="Busca un país"
      ref={ search }
    />        
    <div className="input-group-append">
      <input 
        className="btn btn-outline-secondary" 
        type="button" 
        onClick={onClickHandler}
        value="Buscar" />
    </div>
  </div>
}

export default TableRowSearcher;