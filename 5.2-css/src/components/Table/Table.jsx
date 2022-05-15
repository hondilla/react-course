import TableBody from "./TableBody";
import TableHead from "./TableHead";
import styles from "./Table.module.scss"

const Table = ({ title }) => <>
  <h1>{ title }</h1>
  <table className={ styles.myTable }>
    <TableHead />
    <TableBody />
  </table>
</>;

export default Table;