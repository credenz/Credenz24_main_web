import { cn } from './../../utils/cn';
import React, { useEffect, useState, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional CSS for blur effect
export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}) => {
	const containerRef = useRef(null);
	const scrollerRef = useRef(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		console.log(containerRef, scrollerRef);
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards'
				);
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse'
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '70s');
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '90s');
			} else {
				containerRef.current.style.setProperty('--animation-duration', '60s');
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}>
				{items.map((item, idx) => (
					<li
						className="w-[350px] max-w-full flex relative rounded-2xl align-middle border border-b-0 p-4 flex-shrink-0 border-slate-600 justify-center md:w-[450px]"
						style={{
							background:
								'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
						}}
						key={item.id}>
						{/* <blockquote> */}
						{/* <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div> */}
						<img
							// onMouseMove={handleMouseMove}
							height={600}
							width={600}
							src={item.image}
							alt={item.name}
							className="object-cover !m-0 !p-0 object-top rounded-2xl  md:h-300 md:w-300  border-1  group-hover:scale-105 group-hover:z-30  relative transition duration-500"
						/>

						{/* </blockquote> */}
					</li>
				))}
			</ul>
		</div>
	);
};
