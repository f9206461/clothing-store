import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; // we can still add another middlewares here

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;