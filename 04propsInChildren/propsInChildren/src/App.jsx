import { useState } from 'react'
import './App.css'
import Card from './Components/Card';
import Button from './Components/Button';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Card>
      <h2>Counter</h2>
        <h1>{count}</h1>
        <Button handleClick={handleClick} text="Click Me" />
      </Card>
    </>
  );
}

export default App;

