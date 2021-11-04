import * as types from './types';
// contem nosso reduce
export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      console.log(action.type);
      return { ...state, posts: action.payload };
    }
  }
  console.log('action.type nao foi encontrada.');
  return { ...state };
};
