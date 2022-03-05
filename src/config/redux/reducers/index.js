import { TypeAction } from "../constanta"
import initialState from '../store/index'

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
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case TypeAction.TODOS_LOADED:
      return {
        ...state,
        products: action.products,
      }
    case TypeAction.ADD_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const readyCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
      return {
        ...state,
        cart: readyCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }],
      };
    case TypeAction.UPDATE_QTY:
      return {
        cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
      }
    case TypeAction.LOAD_ITEM:
      return {
        ...state,
        prodItem: action.payload,
      }
    default:
      return state;
  }
}

export default rootReducer;
