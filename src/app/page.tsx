import Image from 'next/image';
import HeroLogo from '/src/assets/LOGO.svg';
import React from 'react';

export default function Home() {
	return (
		<React.Fragment>
			<section id="hero" className="grid grid-cols-6 grid-rows-6 h-screen ">
				<div className="blurred-circle"></div>
				<header className="col-start-1 col-end-7 row-start-1 row-end-2">
					<h1 className=" text-lg text-center text-white">HEADER</h1>
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
				<footer className="col-start-1 col-end-7 row-start-6 row-end-7 z-50">
					<h1 className=" text-lg text-center text-white">FOOTER</h1>
				</footer>
			</section>

			<section id="about"></section>

			<section id="projects"></section>
		</React.Fragment>
	);
}
