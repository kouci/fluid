import * as types from "../types";

export const testAction = (payload) => {
  return {
    type: types.TEST_REDUX,
    payload: payload,
  };
};
