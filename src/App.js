import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Contents from './contents';

function App() {

  const [check, setCheck] = useState(false)

  const handleClick = () => {
    setCheck(true)
  }

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {check && <Contents />}
    </div>
  )
}

export default App;
