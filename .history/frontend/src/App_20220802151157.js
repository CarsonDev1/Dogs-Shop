import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import DogsPage from "./component/Dogs/DogsPage";
import Cart from "./component/Cart/Cart";

function App() {
	return (
		<Router>
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
