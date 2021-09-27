import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';
//eslint-disable-next-line
export const H1 = () => {
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
