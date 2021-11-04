import * as types from './types';
//contem nossas ações, funções e etc...
export const loadPosts = async (dispatch) => {
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();

  dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};
