import { useEffect } from "react";
import Component3 from "./Component3";

const Component2 = () => {
  useEffect(() => {
    console.log('render <Component2>');
  });

  return <Component3 />
}

export default Component2;