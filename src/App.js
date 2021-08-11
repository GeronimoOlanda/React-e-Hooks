import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  /*
  // executa toda vez que o component atualiza
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  // executa toda vez qye a dependencia mudar
  useEffect(() => {
    console.log(`Contador mudou para ${counter}`);
  }, [counter]);
 */
  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
