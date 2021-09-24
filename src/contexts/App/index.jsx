import React from 'react';
import { globalState } from './data';
//criamos um componente atraves do React.createContext();
// esse componente tera duas coisas, um provider e o outro consumer(com useContext eliminamos o uso do consumer)
// const GlobalContext = React.createContext(); cria um contexto global
const GlobalContext = React.createContext();

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  return <GlobalContext.Provider value={globalState}>{children}</GlobalContext.Provider>;
};
