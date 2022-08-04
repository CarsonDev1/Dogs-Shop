import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
const Cart = () => {
	const { myCart } = useContext(CartContext);
	return (
		<>
			<section className="cart-container">
				<div className="cart-header">CHECKOUT:</div>
				<div className="cart-item"></div>
			</section>
		</>
	);
};

export default Cart;
