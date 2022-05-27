import { useEffect, useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('render <App>');
  });

  return <>
    <Component1 />
    <Component2 />
    <input type="button" onClick={() => setCounter(counter + 1)} value="Render" />
  </>
}

export default App;