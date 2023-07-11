import Image from 'next/image';
import HeroLogo from '/src/assets/LOGO.svg';
import {
	AiOutlineMenu,
	AiOutlineArrowDown,
	AiFillGithub,
	AiFillTwitterCircle
} from 'react-icons/ai';

import React from 'react';
import Link from 'next/link';

export default function Home() {
	return (
		<React.Fragment>
			<section id="hero" className="grid grid-cols-6 grid-rows-6 h-screen p-5">
				<div className="blurred-circle"></div>
				<header className="col-start-1 col-end-7 row-start-1 row-end-2 flex justify-end">
					<button className="h-min">
						<AiOutlineMenu
							style={{ height: '40px', width: '50px', color: 'white' }}
						/>
					</button>
				</header>
				<main className=" col-start-2 col-end-6 row-start-2 row-end-6 flex justify-center items-center flex-col gap-20  z-50">
					<Image
						src={HeroLogo}
						alt={''}
						height={400}
						width={400}
						className=""
					></Image>
					<h1 className="text-7xl text-white font-bold">JUBO Dev</h1>
				</main>
				<aside className=" col-start-6 col-end-7 row-start-6 row-end-7 flex flex-col items-end justify-center gap-5 z-50">
					<Link
						href={'https://github.com/jurco-exe'}
						className=" hover:cursor-pointer"
					>
						<AiFillGithub
							style={{ height: '40px', width: '50px', color: 'white' }}
						/>
					</Link>
					<Link
						href={'https://twitter.com/iamg30rgeee'}
						className=" hover:cursor-pointer"
					>
						<AiFillTwitterCircle
							style={{ height: '40px', width: '50px', color: 'white' }}
						/>
					</Link>
				</aside>
				<footer className="col-start-1 col-end-7 row-start-6 row-end-7 z-40 flex justify-center flex-col items-center">
					<button className="flex justify-center flex-col items-center">
						<AiOutlineArrowDown
							style={{ height: '40px', width: '50px', color: 'white' }}
						/>
						<h3 className="text-white text-lg border-b-2 border-white w-40 text-center">
							Scroll to Explore
						</h3>
					</button>
				</footer>
			</section>

			<section id="about" className="h-screen"></section>

			<section id="projects"></section>
		</React.Fragment>
	);
}
