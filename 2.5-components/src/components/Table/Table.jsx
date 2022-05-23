import { Fragment } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => 
  <Fragment>
    <h1>React Course</h1>
    <table>
      <TableHead />
      <TableBody />
    </table>
  </Fragment>;

export default Table;