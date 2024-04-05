import React from 'react';
import { IconAppWindow } from '@tabler/icons-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BackgroundGradient } from '../ui/background-gradient';
import { animated, useSpring } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';
import Card from "../../components/cards/ProfileCard"
const ContactProfileCard = ({ name, image, pos }) => {
	const ref = React.useRef(null);
	const { style, ...mouseHandlers } = use3dEffect(ref);
	return (
		<>
			
				<BackgroundGradient className="rounded-[22px] max-w-xs p-4 sm:p-4 bg-slate-900">
				<div className=" w-full md:w-1/5 lg:w-1/5">
					<div className='flex flex-col'>
					<LazyLoadImage
						src={image}
						alt="credenz24"
						height="400"
						width="400"
						className="object-contain rounded-[22px]"
					/>
					<div>
					<p className="mt-4 mb-2 text-base text-white sm:text-lg dark:text-neutral-200">
						{name}
					</p>
					<button className="flex items-center p-3 mt-4 space-x-1 text-xs font-bold text-blue-900 rounded-xl bg-slate-200 dark:bg-zinc-800">
						<span>{pos}</span>
					</button>
					</div>
					
					</div>
					</div>
				</BackgroundGradient>
		
		</>
	);
};

export default ContactProfileCard;
