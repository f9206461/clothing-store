import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist';
// import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./root-saga";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]; // we can still add another middlewares here

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Put our sagas here
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };