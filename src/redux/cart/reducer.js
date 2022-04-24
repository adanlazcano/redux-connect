import { REMOVE, CLEAR_CART, GET_TOTALS, TOGGLE_AMOUNT } from "./types";

import cartItems from "cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case TOGGLE_AMOUNT: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                amount:
                  action.payload.toggle === "inc"
                    ? item.amount + 1
                    : item.amount - 1,
              }
            : item
        ),
      };
    }

    case GET_TOTALS: {
      const { amount, total } = state.cart.reduce(
        (acc, curr) => {
          const { amount, price } = curr;
          acc.amount += amount;
          acc.total += amount * price;
          return acc;
        },
        { total: 0, amount: 0 }
      );

      console.log(total)
      return {
        ...state,
        total: new Intl.NumberFormat("en", { maximumFractionDigits: 2 }).format(
          total
        ),
        amount,
      };
    }

    case REMOVE: {
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== action.payload.id),
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
