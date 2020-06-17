import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollectionInfo = createSelector(
  [selectCollections],
  (collections) =>
    collections.map((collection) => ({
      id: collection.id,
      routeName: collection.routeName,
    }))
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsLoadingCollection = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionisLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
