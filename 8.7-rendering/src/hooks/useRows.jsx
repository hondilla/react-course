export const useRows = (initialRows, excludedColumns) => {
  return structuredClone(initialRows).map(row => {
    excludedColumns.forEach(column => delete row[column]);
    return row;
  });
}
