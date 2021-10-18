import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O Caminho para o paraiso',
  body: 'O corpo de cristo esta em contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('Chamou Muda');
      return { ...state, title: 'mudou', counter: 1 };

    case 'inverter':
      console.log('inverteu');
  }

  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);

  const { counter, title, body } = state;
  return (
    <div>
      <h1>
        {' '}
        {title} {counter}{' '}
      </h1>
      <button
        onClick={() => {
          dispatch({ type: 'muda' });
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
