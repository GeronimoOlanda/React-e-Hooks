import './App.css';
import P from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';

const Post = ({ post }) => {
  console.log('filho renderizou');
  return (
    <div key={post.id} className="posts">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // o component vai renderizar duas vezes, uma para requisitar o arquivo e a outra para exibi-los,
  // por isso vera no console duas vezes a mensagem
  console.log('Pai ta renderizano');

  //component did mount
  useEffect(() => {
    // utilizando setTimeout da para utilizar algum evento de carregamento
    // posts sera exibido depois de 5 segundos
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {/* utilizar use memo para otimização quando necessario*/}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}

      {/* se nao existe posts, exibira a mensagem */}
      {posts.length <= 0 && <p>Não foi encontrado posts</p>}
    </div>
  );
}

export default App;
