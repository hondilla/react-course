import { useEffect } from "react";

const TableHead = ({ children }) => {
  useEffect(() => console.log('<TableHead />'));
  
  return <thead>
    { children }
  </thead>;
}

export default TableHead;