import './styles.css';
import React from 'react';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
function App() {
  return (
    <PostsProvider>
      <div style={{ textAlign: 'center' }}>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
