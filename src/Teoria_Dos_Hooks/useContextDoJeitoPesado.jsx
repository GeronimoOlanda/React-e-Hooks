import React, { useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo de um contexto',
  body: 'Jesus te ama',
  counter: 0,
};

// const GlobalContext = React.createContext(); cria um contexto global
const GlobalContext = React.createContext();

//eslint-disable-next-line
const Div = ({ children}) => {
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
    contextState: { body },
  } = TheContext;
  return <p>{body}</p>;
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
