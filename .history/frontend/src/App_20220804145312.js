import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import DogsPage from "./component/Dogs/DogsPage";
import Cart from "./component/Cart/Cart";
import NavBar from "./Navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "./Contexts/CartContext";

function App() {
	const [allDogs, setAllDogs] = useState([]);
	const [myCart, addToCart] = useState([{}]);
	useEffect(() => {
		async function getData() {
			const res = await axios.get("/v1/dogs");
			return res;
		}
		getData().then((res) => setAllDogs(res.data));
		getData().catch((err) => console.log(err));
	}, []);
	return (
		<CartContext.Provider value={{ myCart, addToCart }}>
			<Router>
				<NavBar />
				<div className="page-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/dogs"
							element={<DogsPage allDogs={allDogs} />}
						/>
						<Route path="/checkout" element={<Cart />} />
					</Routes>
				</div>
			</Router>
		</CartContext.Provider>
	);
}

export default App;
