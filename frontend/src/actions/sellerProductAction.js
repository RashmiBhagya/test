import {
	PRODUCT_CREATE_FAIL,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	VIEW_PRODUCT_FOR_ADMIN_LIST_FAIL,
	VIEW_PRODUCT_FOR_ADMIN_LIST_REQUEST,
	VIEW_PRODUCT_FOR_ADMIN_LIST_SUCCESS,
	
} from "../constants/sellerProductConstants";
import axios from "axios";
import swal from "sweetalert";

/**
 * This action is implemented to
 * to get seller products
 * by seller
 */

export const listProductAction = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_LIST_REQUEST,
		});

		const {
			user_Login: { userInfo },
			seller_Login: {sellerInfo}
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo?.token || sellerInfo.token}`,
			},
		};

		const { data } = await axios.get(`api/seller/seller-products/${sellerInfo._id}`, config);

	 
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to create seller products
 * by seller
 */

export const createProductAction =
	(seller,brandName,categoryName, productName, productPrice, productDescription,pic) => async (dispatch, getState) => {
		try {
			dispatch({ type: PRODUCT_CREATE_REQUEST });

			const {
				
				seller_Login: { sellerInfo },
			} = getState();

			const config = {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${sellerInfo.token }`,
				},
			};

			const { data } = await axios.post(
				`api/seller/product/create`,
				{
					seller,
					brandName,
					categoryName,
					productName,
					productPrice,
					productDescription,
					pic
				},
				config
			);

			dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
			swal({
				title: "Success !!!",
				text: "Product Details Submitted Successful.",
				icon: "success",
				timer: 2000,
				button: false,
			});
			setTimeout(function () {
				window.location.href = "/seller-product-list";
			}, 2000);
		} catch (error) {
			dispatch({
				type: PRODUCT_CREATE_FAIL,
				payload: error.response && error.response.data.message ? error.response.data.message : error.message,
			});
		}
	};

/**
 * This action is implemented to
 * to update seller products
 * by seller
 */

export const updateProductAction =
	(id,seller,brandName,categoryName, productName, productPrice, productDescription,pic) => async (dispatch, getState) => {
		try {
			dispatch({ type: PRODUCT_UPDATE_REQUEST });

			const {
				seller_Login: { sellerInfo },
			} = getState();
			const config = {
				headers: {
					Authorization: `Bearer ${sellerInfo.token}`,
				},
			};
			const { data } = await axios.put(
				`/api/seller/supplier-product/${id}`,
				{
					seller,
					brandName,
					categoryName,
					productName,
					productPrice,
					productDescription,
					pic
				},
				config
			);

			swal({
				title: "Success !!!",
				text: "Product Details Update Successful.",
				icon: "success",
				timer: 2000,
				button: false,
			});
			setTimeout(function () {
				window.location.href = "/seller-product-list";
			}, 2000);

			dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
		} catch (error) {
			const message = error.response && error.response.data.message ? error.response.data.message : error.message;
			dispatch({
				type: PRODUCT_UPDATE_FAIL,
				payload: message,
			});
		}
	};

/**
 * This action is implemented to
 * to delete seller products
 * by seller
 */

export const productDeleteAction = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_DELETE_REQUEST,
		});

		const {
			seller_Login: { sellerInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${sellerInfo.token}`,
			},
		};

		const { data } = await axios.delete(`/api/seller/supplier-product/${id}`, config);

		dispatch({
			type: PRODUCT_DELETE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = "Product Details Delete Failed !!!";
		dispatch({
			type: PRODUCT_DELETE_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to view all supplier products
 * for admin
 */
export const viewProductForAdminAction = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: VIEW_PRODUCT_FOR_ADMIN_LIST_REQUEST,
		});

		const {
			admin_Login: { adminInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${adminInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/admin/seller/seller_product?id=${adminInfo._id}`, config);

		dispatch({
			type: VIEW_PRODUCT_FOR_ADMIN_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		dispatch({
			type: VIEW_PRODUCT_FOR_ADMIN_LIST_FAIL,
			payload: message,
		});
	}
};

/**
 * This action is implemented to
 * to view all supplier products
 * for staff
 */

// export const viewProductForStaffAction = () => async (dispatch, getState) => {
// 	try {
// 		dispatch({
// 			type: VIEW_PRODUCT_FOR_STAFF_LIST_REQUEST,
// 		});

// 		const {
// 			staff_Login: { staffInfo },
// 		} = getState();

// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${staffInfo.token}`,
// 			},
// 		};

// 		const { data } = await axios.get(`/user/staff/supplier_product?id=${staffInfo._id}`, config);

// 		dispatch({
// 			type: VIEW_PRODUCT_FOR_STAFF_LIST_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
// 		dispatch({
// 			type: VIEW_PRODUCT_FOR_STAFF_LIST_FAIL,
// 			payload: message,
// 		});
// 	}
// };
