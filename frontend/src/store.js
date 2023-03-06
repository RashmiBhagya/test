import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/UserReducers";



//create your states here
const reducer = combineReducers({
	user_Login: userLoginReducer,
	
});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;



const initialState = {
	user_Login: { userInfo: userInfoFromStorage },
	
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;