import { useReducer } from 'react';
import { columnVisibility } from '../reducers/ColumnVisibility';

export const useColumns = initialColumns => {
  const [columns, dispatch] = useReducer(columnVisibility, initialColumns);

  const columnsReducer = () => (acc, {alias}) => {
    acc.push(alias)
    return acc;
  }

  const visibleColumns = columns
    .filter(({ isVisible }) => isVisible === true);

  const excludedColumns = columns
    .reduce(columnsReducer(), [])
    .filter(column => 
      !visibleColumns
      .reduce(columnsReducer(), [])
      .includes(column)
    );

  return [columns, dispatch, visibleColumns, excludedColumns];
}

