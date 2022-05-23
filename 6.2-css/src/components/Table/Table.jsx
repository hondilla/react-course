import TableBody from "./TableBody";
import TableHead from "./TableHead";
import styles from "./Table.module.scss"

const Table = ({ title, rows, columns }) =>
  <>
    <h1>{ title }</h1>
    <table className={ styles.myTable }>
      <TableHead columns={ columns } />
      <TableBody rows={ rows } />
    </table>
  </>;

export default Table;