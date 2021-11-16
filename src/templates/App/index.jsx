import './styles.css';
import React from 'react';
import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';
import { Posts } from '../../components/Posts';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div style={{ textAlign: 'center' }}>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
