import initialState from '../store';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS_PROD':
      return {
        ...state,
        totalOrder: state.totalOrder + 1
      }
    case 'MINUS_PROD':
      return {
        ...state,
        totalOrder: state.totalOrder - 1
      }
    case 'todos/todosLoaded':
      return {
        ...state,
        payload: action.payload,
      }
    default:
      console.log(state);
      return state;
  }
}

export default rootReducer;


// 081295912919