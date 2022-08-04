const DogsCard = (props) => {
	const { id, name, breed, description, price, imageUrl } = props;
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
				</div>
			</section>
		</>
	);
};

export default DogsCard;
