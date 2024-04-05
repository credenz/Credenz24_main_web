import React from 'react';
import { AnimatedTooltip } from '../../components/ui/animated-tooltip';
import credenz23 from '../../assets/logo-images/credenz23.avif';
import credenz22 from '../../assets/logo-images/credenz22.png';
import credenz21 from '../../assets/logo-images/credenz21.jpg';
import credenz19 from '../../assets/logo-images/credenz19.jpg';
import credenz18 from '../../assets/logo-images/credenz18.jpg';
import credenz15 from '../../assets/logo-images/credenz15.jpg';
import credenz14 from '../../assets/logo-images/credenz14.jpg';
import Cred22Ing from '../../assets/AboutPisb/Cred22Ing.jpg';
import Cred22Poster from '../../assets/AboutPisb/Cred22Poster.jpg';
import Cred22Team from '../../assets/AboutPisb/Cred22Team.jpg';

import Cred23Poster from '../../assets/AboutPisb/Cred23Poster.jpg';
import Cred23Team from '../../assets/AboutPisb/Cred23Team.jpg';
import Credrang from '../../assets/AboutPisb/Credrang.jpg';
import Juniors from '../../assets/AboutPisb/Juniors.jpg';

import { StickyScroll } from '../../components/ui/sticky-scroll-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards';
import { HeroParallax } from '../../components/ui/hero-parallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { TabsDemo } from '../../components/cards/aboutuscards';
import './about.css';
const About = () => {
	const people = [
		{
			id: 1,
			name: "Credenz'23",
			designation: 'Exploring Paradigms',
			image: credenz23,
		},
		{
			id: 2,
			name: "Credenz'22",
			designation: 'Augmenting Tomorrow',
			image: credenz22,
		},
		{
			id: 3,
			name: "Credenz'21",
			designation: 'Imbibing Ingenuity',
			image: credenz21,
		},
		{
			id: 4,
			name: "Credenz'19",
			designation: 'Mapping Minds',
			image: credenz19,
		},
		{
			id: 5,
			name: "Credenz'18",
			designation: 'Transcending Perspective',
			image: credenz18,
		},
		{
			id: 6,
			name: "Credenz'15",
			designation: 'Rendering your Imagination',
			image: credenz15,
		},
		{
			id: 7,
			name: "Credenz'14",
			designation: 'A Technical Renaissance',
			image: credenz14,
		},
	];

	return (
		<div className="Aboutus h-[400px]">
			<Parallax
				pages={2.2}
				style={{ top: '0', left: '0' }}
				className="animation bg-[#0f1b34]">
				<ParallaxLayer offset={0} speed={0.75}>
					<div class="animation_layer parallax" id="bgblue"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={2}>
					<div className="animation_layer parallax" id="bubbles"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.9}>
					<div class="animation_layer parallax" id="flora4"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={0} speed={0.84}>
					<div class="animation_layer parallax" id="flora3"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.6}>
					<div class="animation_layer parallax" id="flora2"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.3}>
					<div className="flex items-start justify-center text-5xl font-extrabold text-center align-middle animation_layer parallax sm:text-7xl md:text-9xl text-sky-200">
						<p className=" z-10 mt-[47%] sm:mt-36 md:mt-[20%] ">About Us</p>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.6}>
					<div class="animation_layer parallax" id="flora1"></div>
				</ParallaxLayer>
				{/* <ParallaxLayer offset={0} speed={0.3}>
      <div class="animation_layer parallax" id="flora"></div>
      </ParallaxLayer> */}
				<ParallaxLayer offset={0} speed={1.2}>
					<div class="animation_layer parallax shark" id="shark"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={0} speed={1.05}>
					<div class="animation_layer parallax" id="aquaman"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={1.12}>
					<div class="animation_layer parallax" id="bigfish"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={1.1}>
					<div class="animation_layer parallax" id="smallfish"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0.9} speed={1.0}>
					<div className="flex flex-row items-center justify-center w-full p-4 mr-10">
						<AnimatedTooltip items={people} />
					</div>
					<div className="p-10">
						<TabsDemo></TabsDemo>
					</div>
					<div></div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.5} speed={0.8}>
					<div className="md:h-[40rem] h-[20rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
						<InfiniteMovingCards
							items={testimonials}
							direction="right"
							speed="slow"
						/>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};

export default About;

const testimonials = [
	{
		id: '1',
		image: Cred22Ing,
	},
	{ id: '2', image: Cred22Poster },
	{ id: '3', image: Cred22Team },
	{ id: '4', image: Cred23Poster },
	{ id: '5', image: Cred23Team },
	{ id: '6', image: Credrang },
	{ id: '7', image: Juniors },
];
