import './styles.css';
import React from 'react';
import { PostsProvider } from '../../contexts/PostsProvider';
function App() {
  return (
    <PostsProvider>
      <div style={{ textAlign: 'center' }}>
        <h1>Ola</h1>
      </div>
    </PostsProvider>
  );
}

export default App;
