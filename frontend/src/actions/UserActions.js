import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from "../constants/UserConstants";
import axios from "axios";
import swal from "sweetalert";

export const userLogin = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post("/api/admin/adminlogin", { email, password, isAdmin: true }, config);
		
       
		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
		swal({
			title: "Success !!!",
			text: "User Log In Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});

		console.log(data.type);
	
        if(data.type=='admin'){
			setTimeout(function () {
				window.location.href = "/";
			}, 2000);
			localStorage.setItem("adminInfo", JSON.stringify(data));
		}else if(data.type=='customer'){
			setTimeout(function () {
				window.location.href = "/";
			}, 2000);
			localStorage.setItem("customer Info", JSON.stringify(data));
		}else if(data.type=='seller'){
			setTimeout(function () {
				window.location.href = "/sellerAdd";
			}, 2000);
			localStorage.setItem("sellerInfo", JSON.stringify(data));
		}

		// localStorage.setItem("adminInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export function authHeader() {
	let admin = JSON.parse(localStorage.getItem("adminInfo"));

	if (admin && admin.token) {
		return { Authorization: `Bearer ${admin.token}` };
	} else {
		return {};
	}
}

// export const adminLogout = () => async (dispatch) => {
	
// 	localStorage.removeItem("adminInfo");
// 	localStorage.removeItem("userInfo");
// 	localStorage.removeItem("sellerInfo");
// 	setTimeout(function () {
// 		window.location.href = "/";
// 	}, 2000);
// 	dispatch({ type: ADMIN_LOGOUT });
	
// };


export const register = (name, email, password, pic) => async (dispatch) => {
	try {
	  dispatch({ type: USER_REGISTER_REQUEST });
  
	  const config = {
		headers: {
		  "Content-type": "application/json",
		},
	  };
  
	  const { data } = await axios.post(
		"/api/seller/sellerregister",
		{ name, pic, email, password },
		config
	  );
  
	  dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
	  swal({
		title: "Success !!!",
		text: "Registration is Successful.",
		icon: "success",
		timer: 2000,
		button: false,
	});
	setTimeout(function () {
		window.location.href = "/sellerAdd";
	}, 2000);
  
	  dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
     
	  localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
	  dispatch({
		type: USER_REGISTER_FAIL,
		payload:
		  error.response && error.response.data.message
			? error.response.data.message
			: error.message,
	  });
	}
  };
  