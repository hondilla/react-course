import { useState } from "react";

export const useRows = (initialRows, excludedColumns) => {
  const [search, setSearch] = useState('');

  const filteredRows = structuredClone(initialRows)
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    .map(row => {
      excludedColumns.forEach(column => delete row[column]);
      return row;
    });

  return [filteredRows, setSearch];
}
