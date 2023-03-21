import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../../actions/sellerProductAction";
import { authHeader } from "../../../actions/UserActions";
import Loading from "../../../components/LoadingPages/LoadingPages";
import ErrorMessage from "../../../components/Errormeesages/ErrorMessages";
import MainScreen from "../../../components/MainScreen/MainScreen";
import axios from "axios";
//import "./supplierProduct.css";

export default function ProductCreate({ history }) {
	const user_Login = useSelector((state) => state.user_Login);
	const seller_Login = useSelector((state) => state.seller_Login);
	const { userInfo } = user_Login;
	const { sellerInfo } = seller_Login;
	const [brandName, setBrandName] = useState("");
	const [categoryName, setCategoryName] = useState("");
    const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productDescription, setProductDescription] = useState([]);
	const [pic, setPic] = useState("");
	

	//create supplier new material
	useEffect(() => {
		const fetching = async () => {
			const { data } = await axios.get(`api/seller/product/create`, {
				headers: authHeader(),

			});
			console.log(data);
		};

		fetching();
	});

	const dispatch = useDispatch();

	const productCreate = useSelector((state) => state.productCreate);
	const { loading, error } = productCreate;

	// call the action to create new material
	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(createProductAction(sellerInfo._id,brandName,categoryName, productName, productPrice, productDescription,pic));
		if (!brandName || !categoryName|| !productName || !productPrice || !productDescription) return;
	};

	useEffect(() => {}, []);

	if (sellerInfo) {
		return (
			<div
				className="productCreate"
				style={{
					backgroundColor: "#f0f0f0",
				}}
			>
				<br></br>
				<MainScreen title="Create New Products">
					<br></br>
					<br></br>
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
						href="/seller-product-list"
					>
						{" "}
						Back to Product List
					</Button>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<Card
						style={{
							width: "60%",
							borderWidth: 0,
							outline: "none",
							marginLeft: 100,
							borderRadius: 0,
							background: "rgba(231, 238, 238, 0.8)",
						}}
					>
						<Card.Body>
							<Form onSubmit={submitHandler}>
								{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

								<Form.Group controlId="prodname">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Brand Name
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="text"
										required
										value={brandName}
										onChange={(e) => setBrandName(e.target.value)}
									/>
								</Form.Group>

								<Form.Group controlId="prodname">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Category Name
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="text"
										required
										value={categoryName}
										onChange={(e) => setCategoryName(e.target.value)}
									/>
								</Form.Group>



								<Form.Group controlId="prodname">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Product name
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="text"
										required
										value={productName}
										onChange={(e) => setProductName(e.target.value)}
									/>
								</Form.Group>
								<Form.Group controlId="prodprice">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Product Price
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="number"
										required
										value={productPrice}
										onChange={(e) => setProductPrice(e.target.value)}
									/>
								</Form.Group>

								<Form.Group controlId="proddescription">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Product Description
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										as="textarea"
										required
										value={productDescription}
										onChange={(e) => setProductDescription(e.target.value)}
									/>
								</Form.Group>

								<Form.Group controlId="pic">
                                <Form.Label>Profile Picture</Form.Label>
                                <Form.Control
                                      id="custom-file"
                                      type="file"
                                      label="Upload Profile Picture"
                                      custom
									  value={pic}
									  onChange={(e) => setPic(e.target.value)}
                                />
                                </Form.Group>


								{loading && <Loading size={50} />}
								<Button
									style={{
										width: 100,
										height: 40,
										backgroundColor: "green",
										borderRadius: 0,
										border: "1px solid white",
									}}
									type="submit"
									variant="primary"
								>
									Submit
								</Button>
							</Form>
						</Card.Body>
					</Card>
					<br></br>
					<br></br>
					<br></br>
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
