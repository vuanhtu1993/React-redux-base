export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (dispatch, todo) => {
  dispatch({type: ADD_TODO, todo })
};
