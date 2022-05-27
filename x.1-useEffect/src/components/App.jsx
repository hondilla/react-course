import { useEffect, useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let secondsPassed = 1;
    setInterval(() =>
      console.log(`interval ${counter} - ${secondsPassed++}`),
      1000
    );
  });

  return <input type="button" onClick={() => setCounter(counter + 1)} value="Render" />
}

export default App;