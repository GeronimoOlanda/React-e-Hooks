import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
export const Posts = () => {
  const postsContext = useContext(PostsContext);
  console.log(postsContext);

  return (
    <div>
      <h1>Louvado o seja Jesus Cristo!</h1>
    </div>
  );
};
