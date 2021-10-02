import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O Caminho para o paraiso',
  body: 'O corpo de cristo esta em contexto',
  counter: 7,
};

const reducer = (state, action) => {
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  return (
    <div>
      <h1>
        {' '}
        {title} {body}{' '}
      </h1>
    </div>
  );
}

export default App;
