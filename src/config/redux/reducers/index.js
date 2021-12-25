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
    default:
      return state;
  }
}

export default rootReducer;
