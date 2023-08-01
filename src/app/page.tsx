import Image from 'next/image';
import HeroLogo from '/src/assets/LOGO.svg';
import { CiMenuFries } from 'react-icons/ci';

import React from 'react';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="container mx-auto">
			<section id="hero" className="grid grid-cols-3 grid-rows-6 h-screen pt-5">
				<div className="blurred-circle"></div>
				<header className="flex justify-between col-start-1 col-end-4 items-start">
					<div className="px-3 py-1 rounded-full border border-white">
						<h3 className="text-white text-xl">JUBO Dev</h3>
					</div>
					<nav>
						<CiMenuFries className="text-white h-8 w-8" />
					</nav>
				</header>
				<main className=" col-start-1 col-end-4 row-start-2 row-end-6 flex justify-center items-center z-100 flex-col gap-20">
					<div className="rounded-lg flex items-center gap-16">
						<hr />
						<div
							id="logo"
							className="bg-gradient-to-b from-blue-500 to-purple-700 px-10 py-12 rounded-lg w-max relative"
						>
							<Image src={HeroLogo} alt={''} height={200} width={200}></Image>
						</div>
						<hr />
					</div>
					<div>
						<div className="text-center flex flex-col gap-12 relative">
							<h1 className="text-8xl" id="main-title">
								Junior FE Web Developer
							</h1>
							<h2 className="text-5xl text-white">
								with a drive to support companies <br /> in achieving their
								creative visions
							</h2>
						</div>
					</div>
				</main>
			</section>

			<section
				id="about"
				className="grid grid-cols-3 grid-rows-6 h-screen pt-5"
			>
				<main>
					<h1>Hi, I am Juraj</h1>
				</main>
			</section>
		</div>
	);
}
