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
  // toda variavel usada dentro do useEffect, deve ser passada como dependencia em []
  useEffect(() => {
    console.log('C1', counter, 'C2 ', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <h1>
        Contador: C1:{counter}, C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
