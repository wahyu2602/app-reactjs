import initialState from '../store';
import { TypeAction } from '../constanta';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypeAction.PLUS_PROD:
      return {
        ...state,
        totalOrder: state.totalOrder + 1
      }
    case TypeAction.MINUS_PROD:
      return {
        ...state,
        totalOrder: state.totalOrder - 1
      }
    case TypeAction.TODOS_LOADED:
      return {
        ...state,
        payload: action.payload,
      }
    case TypeAction.ADD_CHART:
      return {
        ...state,
        chart: action.chart,
      }
    default:
      console.log(state);
      return state;
  }
}

export default rootReducer;
