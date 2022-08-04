import { useState } from "react";
import "./dogs.css";
const DogsCard = (props) => {
	const { id, name, breed, description, price, imageUrl } = props;
	const [isAdded, setAdded] = useState(false);
	const handleclick = () => {
		setAdded(true);
	};
	return (
		<>
			<section className="dogs">
				<div className="dogs-info">
					<p>{name}</p>
					<p>{breed}</p>
				</div>
				<div className="dogs-img-container">
					<img
						className="dog-img"
						src={imageUrl}
						alt={`picture of: ${name}`}
					/>
					<div className="dogs-desc">{description}</div>
					<div className="dogs-price">{price}$</div>
					{isAdded ? (
						<button disabled className="dogs-btn-disabled">
							ADDED
						</button>
					) : (
						<button className="dogs-btn" onClick={handleclick}>
							ADD TO CART
						</button>
					)}
				</div>
			</section>
		</>
	);
};

export default DogsCard;
