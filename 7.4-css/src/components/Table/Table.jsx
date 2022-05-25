import styled from 'styled-components';

const Table = ({ className, children }) => 
  <table className={ className }>
    { children }
  </table>;

const MyStyledTable = styled(Table)`
  background-color: #b8b8b8;
`;

export default MyStyledTable;