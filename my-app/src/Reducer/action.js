import * as types from "./actionType";

const getProductRequest = () => {
  return {
    type: types.GET_PRODUCT_REQUEST,
  };
};

const getProductSuccess = (payload) => {
  return {
    type: types.GET_PRODUCT_SUCCESS,
    payload,
  };
};

const getProductFailed = () => {
  return {
    type: types.GET_PRODUCT_FAILED,
  };
};

export { getProductFailed, getProductRequest, getProductSuccess };
