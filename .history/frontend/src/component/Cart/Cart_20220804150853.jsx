import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./cart.css";
const Cart = () => {
	const { myCart } = useContext(CartContext);
	return (
		<>
			<section className="cart-container">
				<div className="cart-header">CHECKOUT:</div>
				<div className="cart-items">
					{myCart.slice(1).map((item) => {
						return (
							<div className="cart-item">
								<img
									src={item.imageUrl}
									className="cart-item-img"
									alt="error"
								/>
								{item.name} : {item.price}$
							</div>
						);
					})}
					<div className="cart-total">TOTAL: 0</div>
				</div>
			</section>
		</>
	);
};

export default Cart;
