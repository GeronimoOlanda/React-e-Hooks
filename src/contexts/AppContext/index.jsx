import React, { useState, createContext } from 'react';
import { globalState } from './data';
//criamos um componente atraves do React.createContext();
// esse componente tera duas coisas, um provider e o outro consumer(com useContext eliminamos o uso do consumer)
// const GlobalContext = React.createContext(); cria um contexto global
export const GlobalContext = createContext();

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [state, setState] = useState(globalState);

  return <GlobalContext.Provider value={{ state, setState }}>{children}</GlobalContext.Provider>;
};
