const Table = ({ title, children }) => <>
  <h1>{ title }</h1>
  <table>
    { children }
  </table>
</>;

export default Table;