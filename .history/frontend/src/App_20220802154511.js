import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import DogsPage from "./component/Dogs/DogsPage";
import Cart from "./component/Cart/Cart";
import NavBar from "./Navbar/NavBar";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<div className="page-container">
					<Route path="/" element={<Home />} />
					<Route path="/dogs" element={<DogsPage />} />
					<Route path="/checkout" element={<Cart />} />
				</div>
			</Routes>
		</Router>
	);
}

export default App;
