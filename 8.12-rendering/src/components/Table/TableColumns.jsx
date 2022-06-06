import { memo, useEffect } from "react";

const TableColumns = ({ columns }) => {
  useEffect(() => console.log('<TableColumns />'))
  
  return <tr>
    { columns.map((column, index) => <th key={ index }>{ column }</th>) }
  </tr>;
}

export default memo(TableColumns);