import { useState } from 'react';

export const useColumns = initialColumns => {
  const [columns, setColumns] = useState(initialColumns);

  const visibleColumns = columns.filter(({ isVisible }) => isVisible === true);

  const excludedColumns = columns
    .map(({alias}) => alias)
    .filter(column => 
      !visibleColumns
      .map(({alias}) => alias)
      .includes(column)
    );

  return [columns, setColumns, visibleColumns, excludedColumns];
};
