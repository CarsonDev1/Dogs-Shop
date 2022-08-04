import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
	const navigate = useNavigate();
	const handleShopping = () => {
		navigate("/dogs");
	};
	return (
		<section className="Home-Page">
			<header className="Home-Header">
				🐶 WELCOME TO MY PET SHOP 🐶
			</header>
			<button className="goShopping" onClick={handleShopping}>
				Go Shopping 🛒
			</button>
		</section>
	);
};

export default Home;
