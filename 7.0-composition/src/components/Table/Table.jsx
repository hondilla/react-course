import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ rows, columns }) => 
  <table table className="table table-striped table-sm">
    <TableHead columns={ columns } />
    <TableBody rows={ rows } />
  </table>;

export default Table;