import P from 'prop-types';
import { PostsContext } from './context';
import { reducer } from './reduce';
import { data } from './datas';
import { useReducer } from 'react';

// nosso component Provider
export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);
  return <PostsContext.Provider value={{ postsState, postsDispatch }}>{children}</PostsContext.Provider>;
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
