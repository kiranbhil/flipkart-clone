import * as actionType from "../constants/productConstant";
import axios from "axios";
const URL = "http://localhost:8000/products";

export const getProducts = () => async (dispathch) => {
  try {
    let { data } = await axios.get(`${URL}/products`);
    dispathch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispathch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
    let { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};