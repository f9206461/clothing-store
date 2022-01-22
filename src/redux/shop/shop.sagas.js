import { all, takeLatest, call, put } from "@redux-saga/core/effects";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";
import ShopActionTypes from "./shop.types";

// Generator Functions
function* fetchCollectionsAsync() {
    //yield console.log("I am fired");

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap)); // similar to dispatch
    } catch (err) {
        yield put(fetchCollectionsFailure(err.message));
    }
    
    // collectionRef.get().then(snapshot => {
    //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionMap));
    // })
    // .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

// Saga Listener
export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}

// ROOT SAGA FOR SHOP
export function* shopSagas() {
    yield (all([
        call(fetchCollectionsStart)
    ]))
}