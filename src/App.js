import React, { useContext, useState } from 'react';
import './App.css';

//criamos um estado inicial
const globalState = {
  title: 'O titulo de um contexto',
  body: 'Jesus te ama',
  counter: 0,
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
