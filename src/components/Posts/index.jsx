import { useContext, useEffect } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  // carregando os posts
  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);
  return (
    <div>
      <h1>Louvado o seja Jesus Cristo!</h1>

      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
