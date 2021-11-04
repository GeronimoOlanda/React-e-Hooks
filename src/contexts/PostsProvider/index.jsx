import P from 'prop-types';
import { PostsContext } from './context';

// nosso component Provider
export const PostsProvider = ({ children }) => {
  return <PostsContext.Provider>{children}</PostsContext.Provider>;
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
