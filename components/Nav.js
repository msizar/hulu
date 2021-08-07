import { useRouter } from 'next/router';
import request from '../utils/requests';

const Nav = () => {
	const router = useRouter();
	return (
		<nav className='relative w-full'>
			<div
				className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10
			 	sm:space-x-20 overflow-x-scroll scrollbar-hide'>
				{Object.keys(request).map((key) => (
					<h2
						className='last:pr-24 cursor-pointer transition duration-100 
								hover:scale-125 hover:text-white active:text-red-500'
						onClick={() => router.push(`/?genre=${key}`)}
						key={key}>
						{request[key].title}
					</h2>
				))}
			</div>
			<div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div>
		</nav>
	);
};
export default Nav;
