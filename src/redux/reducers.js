import {
  ADD_TODO,
  REMOVE_TODO
} from './actions'

const initialState = {
  todos: [

  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          action.todo
        ]
      });
      break;

    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          // do something ...        
        ]
      })
    default:
      return state
  }
}