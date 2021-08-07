import ThumbNail from './ThumbNail';

const Results = ({ results }) => {
	return (
		<div
			className='px-5 my-10 sm:grid md:grid-cols-2 
			xl:grid-cols-3 3xl:flex flex-wrap justify-center cursor-pointer'>
			{results.map((res) => (
				<ThumbNail key={res.id} result={res} />
			))}
		</div>
	);
};
export default Results;
