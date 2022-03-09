import { TypeAction } from "../constanta";

export const statusLoad = (boolean) => {
  return {
    type: TypeAction.STATUS_LOAD,
    payload: boolean
  }
}

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
    type: TypeAction.REMOVE_CART,
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

export const updateQtyOrder = (itemId, value) => {
  return {
    type: TypeAction.UPDATE_QTY_ORDER,
    payload: {
      id: itemId,
      qty: value,
    }
  }
}

export const popUpModalBox = (itemId) => {
  return {
    type: TypeAction.POP_UP_MODALBOX,
    payload: {
      id: itemId
    }
  }
}

export const checkedLoad = (itemId, checked) => {
  return {
    type: TypeAction.CHECKED_CART,
    payload: {
      id: itemId,
      checked: checked,
    }
  }
}