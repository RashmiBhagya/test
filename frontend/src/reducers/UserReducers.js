import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	SELLER_LOGIN_FAIL,
	SELLER_LOGIN_REQUEST,
	SELLER_LOGIN_SUCCESS,
	SELLER_LOGOUT,
	
} from "../constants/UserConstants";

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true };
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};

		default:
			return state;
	}
};

//userRegister
export const userRegisterReducer  =(state={}, action) =>{
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return {loading: true};
		case USER_REGISTER_SUCCESS:
			return {loading: false,userInfo:action.payload};
		case USER_REGISTER_FAIL:
			 return {loading: false,error:action.payload};
		default:
			return state;
	}
	}; 

	export const sellerLoginReducer = (state = {}, action) => {
		switch (action.type) {
			case SELLER_LOGIN_REQUEST:
				return { loading: true };
			case SELLER_LOGIN_SUCCESS:
				return { loading: false, sellerInfo: action.payload };
			case SELLER_LOGIN_FAIL:
				return { loading: false, error: action.payload };
			case SELLER_LOGOUT:
				return {};
	
			default:
				return state;
		}
	};