import styles from "./Table.module.scss"

const Table = ({ children }) => 
  <table className={ styles.myTable }>
    { children }
  </table>;

export default Table;