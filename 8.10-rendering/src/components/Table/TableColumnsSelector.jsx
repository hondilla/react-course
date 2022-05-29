import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const TableColumnsSelector = () => {
  const { state, dispatch } = useContext(StateContext);

  const onChangeHandler = ({ target }) => {
    dispatch({
      type: 'SET_COLUMN_VISIBILITY',
      payload: {
        name: target.name,
        checked: target.checked
      }
    });
  }
  return <div className="d-flex flex-row justify-content-start align-items-start flex-wrap pb-4">
    { state.columns.map(({ name, alias, isVisible }) =>
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

export default TableColumnsSelector;