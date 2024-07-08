import { getProducts } from "../../services/productService";
import { productsType } from "./product.types";

export const getProductsData = () => {
  return async (dispatch) => {
    dispatch({ type: productsType.FETCH_DATA_REQUEST });
    await getProducts()
      .then((resp) => {
        dispatch(setProductsData(resp.data));
      })
      .catch((err) => {
        dispatch({ type: productsType.FETCH_DATA_FAILURE, payload: err });
      });
  };
};

export const setProductsData = (data) => ({
  type: productsType.FETCH_DATA_SUCCESS,
  payload: data,
});
