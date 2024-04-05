import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import Plx from 'react-plx';
import EventCard from './EventCard';
import EventJson from './Eventjson';
import './Events.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Logo from '../../images/Images';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Requests from '../../api/ApiList';
import { buyPass, emptyCart, totalsome } from '../../redux/cartSlices';

const Events = () => {
	const Event = Object(EventJson);
	const LoginStatus = useSelector((state) => state.cart.loginStatus);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	function handlePass() {
		dispatch(emptyCart());
		dispatch(totalsome(100));
		setTimeout(dispatch(buyPass(Event)), 100);
		// console.log(object);
		if (LoginStatus) {
			navigate('/paymentpass');
		} else {
			toast.warning('Login First!', {
				style: {
					background: '#1e3257',
					margin: '7px',
					borderRadius: '7px',
					color: 'white',
					border: '1px solid gray',
				},
			});
			navigate('/login');
		}
	}

	return (
		<>
			<div className="Events">
				<div class="c h-[-webkit-fill-available]">
					<span class="bub a "></span>

					<span class="bub c "></span>
					<span class="bub d"></span>
					<span class="bub e"></span>
					<span class="bub f"></span>
					<span class="bub g"></span>
					<span class="bub h"></span>
					<span class="bub i"></span>

					<span class="bub k"></span>
				</div>
				<div className="text-center bg-transparent text-blue-50">
					<h1 className="text-4xl text-cyan-400">Events</h1>
					<div className="lex flex-wrap grid-cols-2 grid lg:grid-cols-6 lg:grid-rows-auto justify-center h-auto p-2 md:mx-auto md:my-4 my-0 border-0 sm:gap-4 md:w-[100%] w-[100%]">
						{Event.map((item, index) => (
							<EventCard
								key={item.id}
								item={item}
								img={Object.values(Logo)[index % Object.values(Logo).length]}
							/>
						))}
					</div>
					<div className="relative border-0">
						<button
							onClick={handlePass}
							className="px-3 py-1 m-1 text-lg border-2 border-blue-600 rounded-md cursor-pointer hover:border-green-600 bg-blue-950 text-slate-200 ">
							Buy Pass
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Events;
