import Image from 'next/image';
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

import HeaderItem from './HeaderItem';
import Nav from './Nav';

const Header = () => {
	return (
		<header className='flex flex-col m-5 justify-between items-center h-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl mt-5'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACOUNT' Icon={UserIcon} />
			</div>
			<Image
				className='object-contain m-0'
				alt='papa'
				src='https://links.papareact.com/ua6'
				width={200}
				height={100}
			/>
			<Nav></Nav>
		</header>
	);
};
export default Header;
