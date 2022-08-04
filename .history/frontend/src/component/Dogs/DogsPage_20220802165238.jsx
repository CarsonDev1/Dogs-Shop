const DogsPage = (props) => {
	const { allDogs } = props;
	return (
		<>
			<section className="dogs-container">
				{allDogs.map((dog) => {
					return (
						<>
							<div>{dog.name}</div>
						</>
					);
				})}
			</section>
		</>
	);
};

export default DogsPage;
