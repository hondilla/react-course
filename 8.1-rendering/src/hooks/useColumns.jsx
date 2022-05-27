import { useState } from 'react';

export const useColumns = initialColumns => {
  const [columns, setColumns] = useState(initialColumns);

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

  return [columns, setColumns, visibleColumns, excludedColumns];
}

