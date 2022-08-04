import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
const Cart = () => {
	const { myCart } = useContext(CartContext);
	return (
		<>
			<section className="cart-container">
				<div className="cart-header">CHECKOUT:</div>
				<div className="cart-item">
					{myCart.map((item) => {
						return (
							<div className="cart-items">
								<img src={item.imageUrl} alt="" />
								{item.name} : {item.price}$
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Cart;
