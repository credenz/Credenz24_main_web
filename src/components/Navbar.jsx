import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Pisblogo from '../images/Pisb_logo.png';
import IEEE_logo from '../images/IEEE_logo.png';
import './Navbar.css';
import { removeLogin } from '../redux/cartSlices';
import { toast } from 'react-toastify';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	let islogged = useSelector((state) => state.cart.loginStatus);
	const [open, setOpen] = useState(true);
	const [close, setClose] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// const closeNavbar = () => {
	// 	setOpen((prev) => (prev = !prev));
	// 	console.log(open);
	// };

	const closeNavbar = () => {
		if (open) {
			setOpen(false);
		}
	};

	useEffect(() => {
		if (open) {
			document.body.addEventListener('click', closeNavbar);
			return () => {
				document.body.removeEventListener('click', closeNavbar);
			};
		}
	}, [open]);

	window.onload = function () {
		if (localStorage.getItem('token') !== null) {
			islogged = true;
		}
	};

	const navigation = [
		{ name: 'Home', href: '/', current: true },
		{ name: 'Events', href: '/events', current: false },
		{ name: 'Sponsors', href: '/sponsors', current: false },
		{ name: 'About', href: '/about', current: false },
		{ name: 'Contact', href: '/contact', current: false },
		{ name: 'Cart', href: '/cart', current: false },
		islogged
			? { name: 'Profile', href: '/profile', current: false }
			: { name: 'Login', href: '/login', current: false },
	];

	const handleLogout = () => {
		dispatch(removeLogin());
		toast.success('Logged Out successfully', {
			style: {
				background: '#1e3257',
				margin: '7px',
				borderRadius: '7px',
				color: 'white',
				border: '1px solid gray',
			},
		});
		navigate('/');
	};

	return (
		<Disclosure
			as="nav"
			className="absolute w-full bg-transparent z-[50] top-0">
			{({ open }) => (
				<>
					<div className="px-2 mx-auto max-w-[100%] sm:px-6 lg:px-8 b-[#0c30\41] bg-sky-200 text-white backdrop-filter backdrop-blur-md bg-opacity-10">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-slate-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block w-6 h-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block w-6 h-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>

							<div className="flex items-center justify-end flex-1 sm:items-stretch sm:justify-between">
								<div className="flex items-center flex-shrink-0">
									<a href="https://www.pictieee.in/">
										<img
											className="hidden w-auto h-8 md:block"
											src={Pisblogo}
											alt="Pisb Logo"
										/>
									</a>
								</div>
								<div className="hidden md:relative sm:ml-6 sm:block nav">
									<button className="flex space-x-4 nav">
										{navigation.map((item) => (
											<Link
												to={item.href}
												key={item.name}
												className={classNames(
													'flex text-white hover:bg-sky-700 hover:text-white w-[100%]',
													'select-none rounded-md px-3 py-2 text-sm border-transparent font-medium focus:border-cyan-600 cursor-pointer focus:ring-2 focus:bg-none focus:text-white w-[100%]'
												)}
												aria-current={item.current ? 'page' : undefined}>
												{item.name}
											</Link>
											// </Disclosure.Button>
										))}
									</button>
									{/* {islogged ? (
										<button
											onClick={handleLogout}
											className={classNames(
												'flex text-slate-900 hover:bg-teal-700 hover:text-white w-[100%]',
												'select-none rounded-md px-3 py-2 text-sm border-transparent font-medium focus:border-cyan-600 cursor-pointer focus:ring-2 focus:bg-none focus:text-white w-[100%]'
											)}></button>
									) : (
										''
									)} */}
								</div>
								<a href="https://www.ieee.org/" className="hidden md:block">
									<img src={IEEE_logo} alt="Ieee logo" />
								</a>
							</div>
						</div>
					</div>

					{/* {DeskTop view} */}
					<Disclosure.Panel
						className={`sm:hidden ${open ? 'block' : 'hidden'}`}>
						<div
							className="px-2 pt-2 pb-3 space-y-1 nav h-[100%] border-[#276577] border-b-4"
							onClick={() => {
								setOpen(false);
							}}>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="div"
									className={classNames(
										item.current
											? 'bg-gray-900 text-white w-[100%]'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block rounde-md px-3 py-2 text-base font-medium hover:border-b-2 hover:border-sky-500 rounded-none'
									)}
									aria-current={item.current ? 'page' : undefined}>
									<Link
										to={item.href}
										className="w-[100%] flex cursor-pointer 
										">
										{item.name}
									</Link>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
