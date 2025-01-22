import { useState } from 'react';

import './App.css';

function App() {
  let [count, setCount] = useState(15);

  const addValue = () => {
    if (count < 20) {
      setCount(count = count + 1)
    }
  };
  const subtractValue = () => {
    if (count > 0) {
      setCount(count = count - 1)
    }
  };

  return (
    <>
      <h1>First Counter Project</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={subtractValue}>Decrease Value</button>
      <p>The updated value is: {count}</p>
    </>
  );
}

export default App;
