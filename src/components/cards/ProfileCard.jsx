import Styles from './card.module.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Card({ imagen, name, posi, ph, mailid, lknid }) {
	const [show, setShown] = useState(false);

	const props3 = useSpring({
		transform: show ? 'scale(1.03)' : 'scale(1)',
		boxShadow: show
			? '0 20px 25px rgb(0 0 0 / 25%)'
			: '0 2px 10px rgb(0 0 0 / 8%)',
	});
	return (
		<animated.div
			className=" cardp flex flex-col border-2 border-blue-300 w-60 md:w-[40%] lg:w-[18%] bg-slate-900  p-[4] md:p-6 lg:p-1 rounded-2xl justify-center h-[fit-content]  md:h-[60vh] lg:h-[60vh]"
			style={props3}
			onMouseEnter={() => setShown(true)}
			onMouseLeave={() => setShown(false)}>
			<img
				src={imagen}
				className="p-8 mt-3 rounded-full md:rounded-3xl md:p-3 md:m-3"
				alt=""
			/>
			<div className="text-xs text-center text-white lg:text-sm md:p-1">
				{name}
			</div>
			<div className=" posi font-[Poppins]  md:text-xs text-white border-2 text-center p-1 md:p-1 m-2  rounded-md bg-slate-500">
				{name === 'Prasanna Pande' ? (
					<p className="font-[Poppins]">Vice Chairperson</p>
				) : name === 'Kaushal Lande' ? (
					<p className="font-[Poppins]">Public Relations Officer</p>
				) : name === 'Dhruv Goplani' ? (
					<p className="font-[Poppins]">Marketing Head</p>
				) : name === 'Prem Deshmukh' ? (
					<p className="font-[Poppins]">Vice Treasurer</p>
				) : name === 'Pranav Bhiungade' ? (
					<p className="font-[Poppins]">Joint Secretary of Finance</p>
				) : name === 'Jeeya Shah' ? (
					<p className="font-[Poppins]">Public Relations Officer</p>
				) : (
					<p className="font-[Poppins]">Joint Secretary</p>
				)}
			</div>

			<div className="flex justify-around mb-10 md:m-[3] lg:mt-2  gap-4 cursor-pointer">
				<a href={`mailto: mailid`} target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon
						icon={faEnvelope}
						style={{ color: 'skyblue', fontSize: '20px' }}
					/>
				</a>
				<a href={lknid} target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon
						icon={faLinkedin}
						style={{ color: 'skyblue', fontSize: '20px' }}
					/>
				</a>
				<a href={lknid} target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon
						icon={faPhone}
						style={{ color: 'skyblue', fontSize: '20px' }}
					/>
				</a>
			</div>
		</animated.div>
	);
}

export default Card;
