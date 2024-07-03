import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  function minus (event) {
    setCount(count - 1);
  }

  function plus (event) {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={minus}>-1</button>
      <button onClick={plus}>+1</button>
    </div>
  );
}

export default App;
