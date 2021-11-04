// version 1
import './App.css';
import P from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>;
};
Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);
  console.log('O Pai ta on e funcionano');
  // utilizamos o useMemo para armazenar e utiliza-los quando precisar chama-los, sem a necessidade de renderização novamente
  // o useMemo recebe dois parametros, uma funcao e um array com parametro de dependencia.
  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <h1>Teste 3</h1>
      <p>{counter}</p>
      {btn}
    </div>
  );
}

export default App;
