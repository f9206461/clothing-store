import { takeLatest, put, all, call } from "@redux-saga/core/effects";

import UserActionTypes from "./user.types";
import { 
    signInSuccess, 
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess
} from "./user.actions";
import { 
    auth, 
    googleProvider, 
    createUserProfileDocument,
    getCurrentUser
} from "../../firebase/firebase.utils";

// NEW GENERATOR FUNCTION, USED IN BOTH SIGN IN WITH GOOGLE AND EMAIL
export function*  getSnapshotFromUserAuth(authenticatedUser, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, authenticatedUser, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch(error) {
        yield put(signInFailure(error));
    }
}

// SIGN IN WITH GOOGLE
function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

// ---Saga Listener
export function* onGoogleSignInStart() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
}

// SIGN IN WITH EMAIL
function* signInWithEmail({payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(err) {
        yield put(signInFailure(err));
    }
};

// ---Saga Listener
export function* onEmailSignInStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
}

// FOR PERSISTENCE (SIGNED IN USER)
function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

// ---Saga Listener
export function* onCheckUserSession() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

// SIGN OUT
function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(err) {
        yield put(signOutFailure(err));
    }
}

// ---Saga Listener
export function* onSignOutStart() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        signOut
    )
}

// SIGN UP
function* signUp({ payload: { email, password, displayName }}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(
            signUpSuccess({ user, additionalData: {displayName} })
        );
    } catch (err) {
        yield put(signUpFailure(err));
    }
}

function* signInAfterSignUp({ payload: { user, additionalData }}) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

// ---Saga Listener
export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

// ROOT SAGA FOR USER
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}