import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O Caminho para o paraiso',
  body: 'O corpo de cristo esta em contexto',
  counter: 0,
};
{
  /*Payload manda algo para o nosso reducer*/
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('Chamou Muda com este payload', action.payload);
      return { ...state, title: action.payload, counter: 1 };

    case 'inverter': {
      console.log('inverteu');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
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
          dispatch({ type: 'muda', payload: new Date().toLocaleDateString('pt-BR') });
        }}
      >
        Muda
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'inverter' });
        }}
      >
        inverter
      </button>
    </div>
  );
}

export default App;
