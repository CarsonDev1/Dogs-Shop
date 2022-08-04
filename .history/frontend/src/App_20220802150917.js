import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import DogsPage from "./component/Dogs/DogsPage";

function App() {
	return (
		<Router>
			<div className="page-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dogs" element={<DogsPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
