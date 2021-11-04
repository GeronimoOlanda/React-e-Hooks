import P from 'prop-types';
import { useReducer, useContext, createContext } from 'react';
import './App.css';
// data.jsx
export const globalState = {
  title: 'O Caminho para o paraiso',
  body: 'O corpo de cristo esta em contexto',
  counter: 0,
};

// reducer.js
export const reducer = (state, action) => {
  return { ...state };
};

//Context.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);

  return <h1>{context.state.title}</h1>;
};
//App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
