import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase.utils';
import UserActionTypes from '../user/user.types';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';
import CartActionTypes from './cart.types';

// CLEAR CART WHEN USER SIGN OUT
export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCartOnSignOut
    )
}

// UPDATING CART IN FIREBASE
export function* updateCartInFirebase() {
    // Get current user to get userId
    const currentUser = yield select(selectCurrentUser);

    if (currentUser) {
        try {
            const cartRef = yield getUserCartRef(currentUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({ cartItems });
        } catch (err) {
            console.log(err);
        }
    }
}

// PULL IN CART ITEMS FROM FIREBASE
export function* checkCartFromFirebase({ payload: user }) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

// PULL IN CART ITEMS WHEN USER SIGN IN
export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
    // If cart items are added, removed, or cleared, update Firebase.
    yield takeLatest(
        [
            CartActionTypes.ADD_ITEM,
            CartActionTypes.REMOVE_ITEM,
            CartActionTypes.CLEAR_ITEM_FROM_CART,
        ],
        updateCartInFirebase
    );
}

// ROOT SAGA FOR CART
export function* cartSagas() {
    yield all (
        [
            call(onSignOutSuccess),
            call(onCartChange),
            call(onUserSignIn)
        ]
    );
}