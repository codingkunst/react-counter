import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  // -1
  function minus (event) {
    setCount(count - 1);
  }

  // +1
  function plus (event) {
    setCount(count + 1);
  }

  return (
    <div className='app-style'>
      <div className='count-style'>{count}</div>
      <div className='btn-style'>
        <button className='btn-minus' onClick={minus}>-1</button>
        <button className='btn-plus' onClick={plus}>+1</button>
      </div>
    </div>
  );
}

export default App;
