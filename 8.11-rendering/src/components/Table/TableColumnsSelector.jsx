import { memo, useEffect } from "react";

const TableColumnsSelector = ({ columns, setColumns }) => {

  useEffect(() => console.log('<TableColumnsSelector />'));

  const onChangeHandler = ({ target }) => {
    setColumns(state => {
      const newState = structuredClone(state);
      const column = newState.find(({ alias }) => alias === target.name);
      column.isVisible = target.checked;
      return newState;
    });
  }
  return <div className="d-flex flex-row justify-content-start align-items-start flex-wrap pb-4">
    { columns.map(({ name, alias, isVisible }) =>
      alias !== 'id' && <label key={ name } className="form-check">
        <input
          className="form-check-input"
          name={ alias }
          checked={ isVisible }
          type="checkbox"
          onChange={ onChangeHandler }
        />
        <span className="form-check-label">{ name }</span>
      </label>
    )}
  </div>
}

export default memo(TableColumnsSelector);