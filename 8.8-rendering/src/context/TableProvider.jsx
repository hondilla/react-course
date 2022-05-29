import { createContext } from 'react';

export const TableContext = createContext();

const TableProvider = ({ rows, columns, children }) => {
  return <TableContext.Provider value={{ rows, columns }}>
    { children }
  </TableContext.Provider>
}

export default TableProvider;