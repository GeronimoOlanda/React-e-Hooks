import React, { useEffect, useState, useRef } from 'react';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};
function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Contador: {counter}</h1>
      <h2>Delay: {delay} </h2>

      <div style={{ paddingLeft: '30px' }}>
        <button
          style={{
            width: '100px',
            height: '30px',
            borderRadius: '23px',
            outline: 'none',
            borderStyle: 'none',
            backgroundColor: '#8e44ad',
            color: '#ecf0f1',
          }}
          onClick={() => {
            setDelay((d) => d + incrementor);
          }}
        >
          +{incrementor}
        </button>

        <button
          style={{
            width: '100px',
            height: '30px',
            borderRadius: '23px',
            outline: 'none',
            borderStyle: 'none',
            backgroundColor: '#8e44ad',
            color: '#ecf0f1',
          }}
          onClick={() => {
            setDelay((d) => d - incrementor);
          }}
        >
          -{incrementor}
        </button>
        {<br />}
        <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))} />
      </div>
    </div>
  );
}

export default App;
