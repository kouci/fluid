import * as types from "../types";

export const CardAction = (payload) => {
  return {
    type: types.CART_ADD_ITEM,
    payload: payload,
  };
};


