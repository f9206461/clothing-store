import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

// become a large JSON
export default combineReducers({
    user: userReducer
});