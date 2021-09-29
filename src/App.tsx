import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState<number | string>(5)
  const changeNumber = () => {
    setNumber("10")
  }
  return (
    <div className="App">
      {number}
      <button onClick={changeNumber}>Change to 10</button>
    </div>
  );
}

export default App;
