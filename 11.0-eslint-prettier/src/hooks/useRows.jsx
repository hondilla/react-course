export const useRows = (initialRows, columns) => {
  return structuredClone(initialRows).map(row => {
    columns.forEach((key) => delete row[key]);
    return row;
  });
}
