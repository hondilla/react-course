import styled from 'styled-components'
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const MyStyledTable = styled.table`
  background-color: aqua
`;

const Table = () => {
  return <MyStyledTable>
    <TableHead />
    <TableBody />
  </MyStyledTable>;
}

export default Table;