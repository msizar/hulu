import ThumbNail from './ThumbNail';
import FlipMove from 'react-flip-move';

const Results = ({ results }) => {
	console.log(results);

	return (
		<FlipMove
			className='px-5 my-10 sm:grid md:grid-cols-2 
			xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
			{results.map((res) => (
				<ThumbNail key={res.id} result={res} />
			))}
		</FlipMove>
	);
};
export default Results;
