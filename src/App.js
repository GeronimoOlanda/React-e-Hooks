import React, { useContext, useState } from 'react';
import './App.css';

//criamos um estado inicial
const globalState = {
  title: 'O titulo de um contexto',
  body: 'Jesus te ama',
  counter: 0,
};

//criamos um componente atraves do React.createContext();
// esse componente tera duas coisas, um provider e o outro consumer(com useContext eliminamos o uso do consumer)
// const GlobalContext = React.createContext(); cria um contexto global
const GlobalContext = React.createContext();

//eslint-disable-next-line
const Div = () => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

//eslint-disable-next-line
const H1 = () => {
  const TheContext = useContext(GlobalContext); //usa o contexto fornecido pelo GlobalContext
  const {
    contextState: { title, counter },
  } = TheContext;

  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

//eslint-disable-next-line
const P = () => {
  const TheContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = TheContext;
  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      {/*provider diz que vamos prover um contexto*/}
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
