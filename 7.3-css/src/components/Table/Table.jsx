import styled from 'styled-components';

const MyStyledTable = styled.table`
  background-color: #b8b8b8;
`;

const Table = ({ children }) => 
  <MyStyledTable>
    { children }
  </MyStyledTable>;

export default Table;