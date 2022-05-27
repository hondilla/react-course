import { useState } from "react";

const removeProperties = (object, ...keys) =>
  keys.length ? removeProperties(removeProperty(keys.pop(), object), ...keys) : object;
const removeProperty = (propKey, { [propKey]: _propValue, ...rest }) => rest;

export const useRows = (initialRows, columns) => {
  const [rows, setRows] = useState(initialRows);

  const filteredRows = rows.reduce((acc, row) => {
    acc.push(removeProperties(row, columns));
    return acc;
  }, []);

  return [filteredRows, setRows];
}