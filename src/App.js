import React from 'react';
import P from 'prop-types';
import './App.css';

const globalState = {
  title: 'O titulo de um contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

//eslint-disable-next-line
const Div = ({ children }) => {
  return <div className="App">{children}</div>;
};

//eslint-disable-next-line
const H1 = ({ children }) => {
  return <h1>{children}</h1>;
};
function App() {
  return (
    <Div>
      <H1>Oi</H1>
    </Div>
  );
}

export default App;
