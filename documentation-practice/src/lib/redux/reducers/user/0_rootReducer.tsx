import { combineReducers } from "redux";
import { productsSlice } from "./1_productsReducer";

// import authStates from "./1_authApiR"


const rootReducer = combineReducers({
    productsSlice
});

export default rootReducer;
