import { useState } from "react";

export const useRows = (initialRows, columns) => {
  const [search, setSearch] = useState('');

  const filteredRows = structuredClone(initialRows)
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    .map(row => {
      columns.forEach((key) => delete row[key]);
      return row;
    });

  return [filteredRows, setSearch];
}
