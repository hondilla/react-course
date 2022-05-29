import { useEffect } from "react";

const Table = ({ children }) => {
  useEffect(() => console.log('<Table />'));

  return <table className="table table-striped table-sm">
    { children }
  </table>;
}

export default Table;