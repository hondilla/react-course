import { createContext, useReducer } from 'react';
import { stateReducer } from '../reducers/StateReducer';

export const StateContext = createContext();

const StateProvider = ({ children }) => {

  const [state, dispatch] = useReducer(stateReducer, {
    columns: [
      {"name": "Id", "alias": "id", "isVisible": true},
      {"name": "Nombre", "alias": "name", "isVisible": false}
    ],
    visibleColumns: [
      {"name": "Id", "alias": "id", "isVisible": true}
    ],
    excludedColumns: ["name"],
    rows: [],
    countries: []
  });

  return <StateContext.Provider value={{ state, dispatch }}>
    { children }
  </StateContext.Provider>
}

export default StateProvider;