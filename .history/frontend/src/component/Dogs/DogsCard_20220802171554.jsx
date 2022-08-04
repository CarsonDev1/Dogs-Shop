import "./dogs.css";
const DogsCard = (props) => {
	const { id, name, breed, description, price, imageUrl } = props;
	return (
		<>
			<section className="dogs">
				<div className="dogs-info">
					<p>{name}</p>
					<p>{breed}</p>
				</div>
				<div className="dogs-container">
					<img
						className="dog-img"
						src={imageUrl}
						alt={`picture of: ${name}`}
					/>
					<div className="dogs-desc">{description}</div>
					<div className="dogs-price">{price}$</div>
					<button className="dogs-btn">ADD TO CART</button>
				</div>
			</section>
		</>
	);
};

export default DogsCard;
