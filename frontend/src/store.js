import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer,sellerLoginReducer } from "./reducers/UserReducers";


import {
	productCreateReducer,
	productListReducer,
	productDeleteReducer,
	productUpdateReducer,
	//viewProductListForSiteManagerReducer,
	//viewProductListForStaffReducer,
} from "./reducers/sellerProductReducers";


//create your states here
const reducer = combineReducers({
	user_Login: userLoginReducer,
	user_Registar: userRegisterReducer,
	seller_Login: sellerLoginReducer,
	productList: productListReducer,
	productCreate:productCreateReducer,
	productDelete: productDeleteReducer,
	productUpdate: productUpdateReducer,
});



const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const sellerInfoFromStorage = localStorage.getItem("sellerInfo") ? JSON.parse(localStorage.getItem("sellerInfo")) : null;


const initialState = {
	user_Login: { userInfo: userInfoFromStorage },
	seller_Login:{sellerInfo:sellerInfoFromStorage}
	
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;