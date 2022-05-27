const removeProperties = (object, ...keys) =>
  keys.length ? removeProperties(removeProperty(keys.pop(), object), ...keys) : object;
const removeProperty = (propKey, { [propKey]: _propValue, ...rest }) => rest;

export const useRows = (rows, columns) => 
  rows.reduce((acc, row) => {
    acc.push(removeProperties(row, columns));
    return acc;
  }, []);