import './App.css';
import { useState, useEffect } from 'react';
const Button = (incrementButton) => {
  return <button onClick={incrementButton}>+</button>;
};

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Teste 3</h1>
      <buton onClick={incrementCounter}> + </buton>
    </div>
  );
}

export default App;
