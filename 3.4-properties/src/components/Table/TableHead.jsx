import TableColumns from "./TableColumns";

const TableHead = ({ columns }) => 
  <thead>
    <TableColumns columns={ columns } />
  </thead>;

export default TableHead;