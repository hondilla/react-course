import { memo, useEffect, useRef } from "react";

const TableInputButton = ({ setRows }) => {
  const country = useRef();

  useEffect(() => console.log('<TableInputButton />'));

  const onClickHandler = () => {
    setRows(country.current.value);
  }
  
  return <div className="input-group mb-3">
    <input className="form-control" type="text" placeholder="Nombre del país" ref={ country } />      
    <div className="input-group-append">
      <input 
        className="btn btn-outline-secondary" 
        type="button" 
        onClick={ onClickHandler }
        value="Añadir" />
    </div>
  </div>;
}

export default memo(TableInputButton);