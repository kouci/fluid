import * as types from "../types";

export const RemoveCardAction = (payload) => {
    console.log("action :")
  return {
    type: types.CART_REMOVE_ITEM,
    payload: payload,
  };
};

