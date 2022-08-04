import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import DogsPage from "./component/Dogs/DogsPage";
import Cart from "./component/Cart/Cart";
import NavBar from "./Navbar/NavBar";
import { useEffect } from "react";
import axios from "axios";

function App() {
	useEffect(() => {
		function getData() {
			const res = axios.get("http://localhost:8080/v1/dogs");
			return res;
		}
	}, []);
	return (
		<Router>
			<NavBar />
			<div className="page-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dogs" element={<DogsPage />} />
					<Route path="/checkout" element={<Cart />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
