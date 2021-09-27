import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';
//eslint-disable-next-line
export const P = () => {
  const TheContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setState,
  } = TheContext;
  return (
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body} {counter}
    </p>
  );
};
