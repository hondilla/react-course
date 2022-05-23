import styled from 'styled-components';
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const MyStyledTable = styled.table`
  background-color: #b8b8b8;
`;

const Table = ({ title, rows, columns }) =>
  <>
    <h1>{ title }</h1>
    <MyStyledTable>
      <TableHead columns={ columns } />
      <TableBody rows={ rows } />
    </MyStyledTable>
  </>;

export default Table;