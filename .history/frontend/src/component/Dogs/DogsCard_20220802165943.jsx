const DogsCard = (props) => {
	const { id, name, breed, description, price, imageUrl } = props;
	return (
		<>
			<section className="dogs">name is: {name}</section>
		</>
	);
};

export default DogsCard;
