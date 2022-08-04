const DogsPage = (props) => {
	const { allDogs } = props;
	return (
		<>
			<section className="dogs-container">
				{allDogs.map((dog) => {
					return (
						<div key={dog.id}>
							Dog name: {dog.name}
							Breed: {dog.breed}
						</div>
					);
				})}
			</section>
		</>
	);
};

export default DogsPage;
