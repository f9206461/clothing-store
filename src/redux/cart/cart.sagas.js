import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

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

// ROOT SAGA FOR CART
export function* cartSagas() {
    yield (all ([
        call(onSignOutSuccess)
    ]))
}