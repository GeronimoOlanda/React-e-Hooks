import React from 'react';
import P from 'prop-types';
import './App.css';

const globalState = {
  title: 'O titulo de um contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

//eslint-disable-next-line
const Div = ({ children}) => {
  return <H1 />;
};

//eslint-disable-next-line
const H1 = ({ children }) => {
  return <h1>Pegar este texto</h1>;
};
function App() {
  return (
    <GlobalContext.Provider value={globalState}>
      {/*provider diz que vamos prover um contexto*/}
      <Div></Div>
    </GlobalContext.Provider>
  );
}

export default App;
