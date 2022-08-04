const DogsPage = (props) => {
	const { allDogs } = props;
	return (
		<>
			<section className="dogs-container">
				{allDogs.map((dog) => {
					return <>{dog.name}</>;
				})}
			</section>
		</>
	);
};

export default DogsPage;
