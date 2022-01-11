import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from './cart/cart.reducer';

// become a large JSON
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});