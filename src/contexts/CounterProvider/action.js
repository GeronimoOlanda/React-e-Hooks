import * as types from './types';
//ação de incrementar
export const incrementCounter = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER });
};

//ação de decrementar
export const decrementCounter = (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER });
};
