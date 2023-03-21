import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction,productDeleteAction } from "../../../actions/sellerProductAction";
import Loading from "../../../components/LoadingPages/LoadingPages";
import ErrorMessage from "../../../components/Errormeesages/ErrorMessages";
import swal from "sweetalert";
import { useState } from "react";
import MainScreen from "../../../components/MainScreen/MainScreen";
export default function ProductList() {
	const dispatch = useDispatch();

	const user_Login = useSelector((state) => state.user_Login);
	const seller_Login = useSelector((state) => state.seller_Login);
	const { userInfo } = user_Login;
	const {sellerInfo} = seller_Login;

	// get the seller's product list
    const productList = useSelector((state) => state.productList);
	const { loading, product, error } = productList;

	
	// const productCreate = useSelector((state) => state.productCreate);
	// const { success: successCreate } = productCreate;

	const productDelete = useSelector((state) => state.productDelete);
	const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete;

	const [search, setSearch] = useState("");
	let searchHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setSearch(lowerCase);
	};

	const deleteHandler = (id) => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover these details!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
			.then((willDelete) => {
				if (willDelete) {
					dispatch(productDeleteAction(id));
					swal({
						title: "Success!",
						text: "Deleted Product Successfully",
						icon: "success",
						timer: 2000,
						button: false,
					});
					navigate("/product-list");
				}
			})
			.catch((err) => {
				swal({
					title: "Error!",
					text: "Couldn't delete Products",
					type: "error",
				});
			});
	};

	const navigate = useNavigate();
	useEffect(() => {
		dispatch(listProductAction());
		if (!userInfo && !sellerInfo) {
			navigate("/access-denied");
		}
	}, [dispatch, Navigate, userInfo, sellerInfo]);

	if (userInfo || sellerInfo) {
		return (
			<div style={{ backgroundColor: "#f0f0f0" }}>
				<MainScreen title="Seller Product List">
					<div style={{ minHeight: 700, marginTop: 50 }} className="supplierProduct">
						<div className="search" style={{ marginTop: 50 }}>
							<Form inline>
								<input
									type="text"
									placeholder="Enter Product Name"
									onChange={searchHandler}
									style={{
										width: 260,
										height: 40,
										borderRadius: 50,
										padding: "10px",
										paddingLeft: "15px",
										marginLeft: 900,
									}}
								/>
							</Form>
						</div>
						<br></br>
						<div>
							<Row>
								<Col>
									<Link to="/seller-product-create">
										<Button
											variant="success"
											style={{
												marginBottom: 6,
												fontSize: 15,
												backgroundColor: "green",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
											size="lg"
										>
											+ New Products
										</Button>
									</Link>
								</Col>
							</Row>
						</div>

						<br />
						{errorDelete && <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>}
						{loadingDelete && <Loading />}
						{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
						{loading && <Loading />}
						<Table style={{ background: "white" }}>
							<>
								<thead>
									<tr
										style={{
											boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
											height: 60,
											color:"green",
										}}
									>
										<th
											style={{
												width: 150,
												fontSize: 20,
												
											}}
										>
											Brand Name
										</th>
										<th
											style={{
												width: 150,
												fontSize: 20,
											}}
										>
											Category Name
										</th>
										<th
											style={{
												width: 150,
												fontSize: 20,
											}}
										>
											 Product Name
										</th>
										<th
											style={{
												width: 150,
												fontSize: 20,
											}}
										>
											Product Price
										</th>

										<th
											style={{
												width: 150,
												fontSize: 20,
											}}
										>
											Product Description
										</th>
										<th
											style={{
												width: 150,
												fontSize: 20,
											}}
										>
											Picture
										</th>
										<th
											style={{
												width: 150,
												fontSize: 20,
											}}
										>
											Action
										</th>
									</tr>
								</thead>

								<tbody>
									{product
										?.reverse()
										.filter((filteredB) => filteredB.productName.includes(search))
										.map((prod) => (
											<tr
												key={prod._id}
												style={{
													boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
												}}
											>
											 <td
													style={{
														fontSize: 20,
													}}
												>
													{prod.brandName}
												</td>

                                              <td
													style={{
														fontSize: 20,
													}}
												>
													{prod.categoryName}
												</td>

                                              <td
													style={{
														fontSize: 20,
													}}
												>
													{prod.productName}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{prod.productPrice}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{prod.productDescription}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													<img src={prod.pic} alt="product image" height={50}/>
												</td>

												<td>
													<td>
														<Link to={`/single-product/${prod._id}`}>
															<i class="fa-solid fa-pen-to-square"></i>
														</Link>
														&emsp;
														<span onClick={() => deleteHandler(prod._id)}>
															<i
																class="fa-solid fa-trash"
																style={{ cursor: "pointer" }}
																onClick={() => deleteHandler(prod._id)}
															></i>
														</span>
													</td>
												</td>
											</tr>
										))}
								</tbody>
							</>
						</Table>
						<br></br>
					</div>
				</MainScreen>
			</div>
		);
	} else {
		return (
			<div className="denied">
				<MainScreen />
				<br></br>
			</div>
		);
	}
}
