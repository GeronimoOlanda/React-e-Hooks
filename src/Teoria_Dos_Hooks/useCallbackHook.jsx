import './App.css';
import P from 'prop-types';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});
Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);
  console.log('O Pai ta on e funcionano');
  return (
    <div className="App">
      <h1>Teste 3</h1>
      <p>{counter}</p>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
