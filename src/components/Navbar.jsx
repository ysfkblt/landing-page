import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

export default function Navbar() {
	const [active, setActive] = useState('Home');
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src={logo} alt='logo' className='w-[200px]' />

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-medium cursor-pointer text-lg ${
							active === nav.title
								? 'text-neutral-200'
								: 'text-neutral-400'
						} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
						onClick={() => setActive(nav.title)}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[34px] object-contain'
					onClick={() => setToggle((p) => !p)}
				/>

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className='list-none flex justify-end items-start flex-1 flex-col'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-medium cursor-pointer ${
									active === nav.title
										? 'text-neutral-200'
										: 'text-neutral-400'
								} ${
									index === navLinks.length - 1
										? 'mb-0'
										: 'mb-4'
								}`}
								onClick={() => setActive(nav.title)}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
