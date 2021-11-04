import P from 'prop-types';
import { PostsContext } from './context';
import { reducer } from './reduce';
import { data } from './datas';
import { useReducer } from 'react';

// nosso component Provider
export const PostsProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(reducer, data);
  return <PostsContext.Provider>{children}</PostsContext.Provider>;
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
