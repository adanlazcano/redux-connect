import { REMOVE, TOGGLE_AMOUNT, GET_TOTALS, CLEAR_CART } from "./types";

export const toggleAmount = (id, toggle) => {
  return { type: TOGGLE_AMOUNT, payload: { id, toggle } };
};

export const getTotals = (_) => {
  return { type: GET_TOTALS };
};

export const removeItems = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const clearCart = (_) => {
  return { type: CLEAR_CART };
};
