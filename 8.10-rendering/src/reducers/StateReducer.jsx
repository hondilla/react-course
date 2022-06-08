export const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_COLUMN_VISIBILITY': {
      const newState = structuredClone(state);
      const column = newState.columns.find(({ alias }) => alias === payload.name);
      column.isVisible = payload.checked;
      newState.visibleColumns = visibleColumns(newState);
      newState.excludedColumns = excludedColumns(newState);
      newState.rows = rowsFilter(state.countries, newState.excludedColumns);
      return newState;
    }
    case 'SET_COUNTRIES': {
      const newState = structuredClone(state);
      newState.countries = payload.countries;
      newState.rows = rowsFilter(payload.countries, state.excludedColumns);
      return newState;
    }
    default:
      return state;
  }
}

const visibleColumns = ({ columns }) => columns.filter(({ isVisible }) => isVisible === true);
const excludedColumns = ({ columns, visibleColumns }) => columns
  .map(({alias}) => alias)
  .filter(column => 
    !visibleColumns
    .map(({alias}) => alias)
    .includes(column)
  );

const rowsFilter = (countries, columns) => {
  return structuredClone(countries).map(row => {
    columns.forEach((key) => delete row[key]);
    return row;
  });
}