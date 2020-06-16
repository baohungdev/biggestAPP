import { ShopActionTypes } from "./shop.types";

export const setCollectionToReducer = (collection) => ({
  type: ShopActionTypes.SET_COLLECTION_TO_REDUCER,
  payload: collection,
});
