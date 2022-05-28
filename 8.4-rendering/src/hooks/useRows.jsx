import { useState } from "react";

const removeProperties = (object, ...keys) =>
  keys.length ? removeProperties(removeProperty(keys.pop(), object), ...keys) : object;
const removeProperty = (propKey, { [propKey]: _propValue, ...rest }) => rest;

export const useRows = (initialRows, columns) => {
  const [filter, setFilter] = useState('');

  const filteredRows = initialRows.filter(({ name }) => 
    name.toLowerCase().includes(filter.toLowerCase())
  ).reduce((acc, row) => {
    acc.push(removeProperties(row, columns));
    return acc;
  }, []);

  return [filteredRows, setFilter];
}