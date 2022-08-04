import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import DogsPage from "./component/Dogs/DogsPage";
import Cart from "./component/Cart/Cart";
import NavBar from "./Navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [allDogs, setAllDogs] = useState([]);
	useEffect(() => {
		async function getData() {
			const res = await axios.get("/v1/dogs");
			return res;
		}
		getData().then((res) => setAllDogs(res.data));
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
