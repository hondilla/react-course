import { useState } from "react";

export const useRows = (initialRows, columns) => {
  const [search, setSearch] = useState('');

  const filteredRows = structuredClone(initialRows)
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    .reduce((acc, row) => {
      columns.forEach((key) => delete row[key]);
      acc.push(row);
      return acc;
    }, []);

  return [filteredRows, setSearch];
}
