import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { adminLogout } from "../../../actions/UserActions";
import "./Dashboard.css";
import MainScreen from "../../../components/MainScreen/MainScreen";

const SellerDashboards = ({ history }) => {
	const seller_Login = useSelector((state) => state.seller_Login);
	const { sellerInfo } = seller_Login;
	const dispatch = useDispatch();
	

	if (sellerInfo) {
		return (
			<div className="sellerBackground">
				<br></br>
				<MainScreen title={`Welcome Back ${sellerInfo && sellerInfo.name}..`}>
					<br></br>

					<div className="loginContainer">
						<Card
							style={{
								borderRadius: 45,
								borderWidth: 2.0,
								marginTop: 20,
								paddingInline: 10,
								background: "rgba(231, 238, 238, 0.8)",
								marginLeft: "10%",
								marginRight: "10%",
								width: "60%",
							}}
						>
							<div className="intro-text">
								<br></br>
								<br></br>
								<div>
									<Link to="/seller-product-create">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											Add Products
										</Button>
									</Link>
								</div>
								<br></br>
								<div>
									<Link to="/seller-product-list">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											View Product List
										</Button>
									</Link>
								</div>
								<br></br>
								<br></br>
							</div>
						</Card>
					</div>
				</MainScreen>
				<br></br>
				<br></br>
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
};

export default SellerDashboards;
