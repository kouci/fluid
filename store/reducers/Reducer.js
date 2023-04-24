import * as types from "../types";
import Cookies from "js-cookie";

const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
  },
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEST_REDUX: {
      return {
        ...state,
        word: action.payload,
      };
    }
    case types.CART_ADD_ITEM: {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case types.CART_REMOVE_ITEM : {
      console.log("payload",action.payload)
      const cartItems = state.cart.cartItems.filter(item => item._id !== action.payload._id);
      console.log("nouvelle liste:", state.cart.cartItems.filter(item => item._id !== action.payload._id))
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
};
