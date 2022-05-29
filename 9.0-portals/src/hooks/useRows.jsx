export const useRows = (initialRows, columns) => {
  return structuredClone(initialRows).reduce((acc, row) => {
    columns.forEach((key) => delete row[key]);
    acc.push(row);
    return acc;
  }, []);
}
