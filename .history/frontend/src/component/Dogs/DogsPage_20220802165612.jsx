import DogsCard from "./DogsCard";

const DogsPage = (props) => {
	const { allDogs } = props;
	return (
		<>
			<section className="dogs-container">
				{allDogs.map((dog) => {
					return (
						<div key={dog.id}>
							<DogsCard />
						</div>
					);
				})}
			</section>
		</>
	);
};

export default DogsPage;
