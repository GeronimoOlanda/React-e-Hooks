import { useContext, useEffect } from 'react';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { incrementCounter } from '../../contexts/CounterProvider/action';

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  // carregando os posts
  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);
  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>Counter {counterState.counter} </button>
      <h1>Louvado o seja Jesus Cristo!</h1>

      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
