import { useEffect } from "react";

const TableRow = ({ row }) => {
  useEffect(() => console.log('<TableRow />'));

  return <tr>
    { Object.keys(row).map((key) => <td key={ key }>{ row[key] }</td>) }
  </tr>; 
}

export default TableRow;