import styled from 'styled-components';
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ title, rows, columns, className }) => 
  <>
    <h1>{ title }</h1>
    <table className={className}>
      <TableHead columns={ columns } />
      <TableBody rows={ rows } />
    </table>
  </>;

const MyStyledTable = styled(Table)`
  background-color: #b8b8b8;
`;

export default MyStyledTable;