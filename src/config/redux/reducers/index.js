import { TypeAction } from "../constanta"
import initialState from '../store/index'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypeAction.STATUS_LOAD:
      return {
        ...state,
        statusLoad: action.payload,
      }
    case TypeAction.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case TypeAction.TODOS_LOADED:
      return {
        ...state,
        products: action.payload,
      }
    case TypeAction.ADD_CART:
      const newCart = state.products.find((prod) => prod.id === action.payload.id);
      const readyCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
      return {
        ...state,
        cart: readyCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1, totalPrice: item.totalPrice + item.price } : item) : [...state.cart, { ...newCart, qty: 1, totalPrice: newCart.price, checked: true }],
      };
    case TypeAction.UPDATE_QTY:
      const conditionValue = action.payload.qty <= 0 ? false : true;
      return {
        ...state,
        cart: conditionValue ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty, totalPrice: item.price * action.payload.qty } : item) : state.cart.map(item => item.id === action.payload.id ? { ...item, qty: 1, totalPrice: item.price } : item)
      }
    case TypeAction.LOAD_ITEM:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      return {
        ...state,
        prodItem: { ...action.payload, qty: 1, totalPrice: item.price },
      }
    case TypeAction.UPDATE_QTY_ORDER:
      const conditionValueOrder = action.payload.qty <= 0 ? false : true;
      const itemOrder = state.prodItem;
      return {
        ...state,
        prodItem: conditionValueOrder ? { ...itemOrder, qty: action.payload.qty, totalPrice: action.payload.qty * itemOrder.price } : { ...itemOrder, qty: 1, totalOrder: itemOrder.price }
      }
    case TypeAction.POP_UP_MODALBOX:
      return {
        ...state,
        modalBox: state.products.find((prod) => prod.id === action.payload.id)
      }
    case TypeAction.CHECKED_CART:
      return {
        ...state,
        cart: state.cart.map((prod) => prod.id === action.payload.id ? { ...prod, checked: action.payload.checked } : prod),
      }
    default:
      return state;
  }
}

export default rootReducer;
