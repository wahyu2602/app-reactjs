import { TypeAction } from "../constanta";

export const loadProducts = (products) => {
  return {
    type: TypeAction.TODOS_LOADED,
    payload: products
  }
}

export const addCart = (itemId) => {
  return {
    type: TypeAction.ADD_CART,
    payload: {
      id: itemId
    }
  }
}

export const removeCart = (itemId) => {
  return {
    type: TypeAction.MINUS_PROD,
    payload: {
      id: itemId,
    }
  }
}

export const updateQty = (itemId, value) => {
  return {
    type: TypeAction.UPDATE_QTY,
    payload: {
      id: itemId,
      qty: value,
    }
  }
}

export const loadItem = (item) => {
  return {
    type: TypeAction.LOAD_ITEM,
    payload: item
  }
}