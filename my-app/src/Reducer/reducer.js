import * as types from "./actionType";

const intitalState = {
  products: [],
  isLoding: false,
  isError: false,
};

const reducer = (oldState = intitalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCT_REQUEST:
      return { ...oldState, isLoding: true };
    case types.GET_PRODUCT_SUCCESS:
      return { ...oldState, isLoding: false, products: payload };
    case types.GET_PRODUCT_FAILED:
      return { ...oldState, isLoding: false, isError: true };
    default:
      return oldState;
  }
};

export { reducer };
