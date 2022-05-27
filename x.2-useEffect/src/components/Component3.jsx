import { useEffect } from "react";
import Component4 from "./Component4";

const Component3 = () => {
  useEffect(() => {
    console.log('render <Component3>');
  });

  return <Component4 />
}

export default Component3;