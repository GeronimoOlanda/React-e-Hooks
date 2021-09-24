import { useContext } from 'react';
//eslint-disable-next-line
export const P = () => {
  const TheContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = TheContext;
  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};
