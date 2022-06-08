import { useReducer } from 'react';
import { columnVisibility } from '../reducers/ColumnVisibility';

export const useColumns = initialColumns => {
  const [columns, dispatch] = useReducer(columnVisibility, initialColumns);

  const visibleColumns = columns
    .filter(({ isVisible }) => isVisible === true);

  const excludedColumns = columns
    .map(({alias}) => alias)
    .filter(column => 
      !visibleColumns
      .map(({alias}) => alias)
      .includes(column)
    );

  return [columns, dispatch, visibleColumns, excludedColumns];
}

