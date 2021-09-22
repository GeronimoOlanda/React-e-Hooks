import React, { useContext } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo de um contexto',
  body: 'Jesus te ama',
  counter: 0,
};

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
  return <h1>{TheContext.title}</h1>;
};

//eslint-disable-next-line
const P = () => {
  const TheContext = useContext(GlobalContext);
  return <h1>{TheContext.body}</h1>;
};

function App() {
  return (
    <GlobalContext.Provider value={globalState}>
      {/*provider diz que vamos prover um contexto*/}
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
