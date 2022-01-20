import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

// Initial input selector
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => 
        collections ? Object.keys(collections).map(key => collections[key]) : [] // collections[key] is the value.
)

// Persist only memoize values stored in state, while memoize will memoize the RETURN of this function, which is the createSelector.
export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections], 
        collections => (collections ? collections[collectionUrlParam] : null)
    )
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);