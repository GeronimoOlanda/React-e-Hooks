import './App.css';
import P from 'prop-types';
import { useState } from 'react';

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (num) => {
    setCounter(counter + num);
  };
  return (
    <div className="App">
      <h1>Teste 3</h1>
      <p>{counter}</p>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
