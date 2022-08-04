import "./home.css";
const Home = () => {
	return (
		<section className="Home-Page">
			<header className="Home-Header">
				🐶 WELCOME TO MY PET SHOP 🐶
				<button className="goShopping" onClick={handleShopping}>
					Go Shopping 🛒
				</button>
			</header>
		</section>
	);
};

export default Home;
