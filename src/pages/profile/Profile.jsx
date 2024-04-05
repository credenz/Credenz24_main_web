import React, { Suspense, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import Teams from './Teams';
import Requests from '../../api/ApiList';
import { useSelector, Provider, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import { useNavigate } from 'react-router-dom';
import { removeLogin } from '../../redux/cartSlices';
import Email from '../../images/Mail.png';
import Call from '../../images/Call.png';
import Orders from '../../images/Orders.png';
import Location from '../../images/Location.png';
import { toast } from 'react-toastify';
import ProfileContext from '../../utils/profileContext/ProfileContext';
import Tickets from './Tickets';
import profilePhoto from '../../images/Profile_logo.jpg';
import './profile.css';

const Profile = () => {
	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}
	const navigate = useNavigate();

	const [profileInfo, setProfileInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await Requests.profile();
				setProfileInfo(res.data);
			} catch (err) {
				if (err.response && err.response.statusText === 'Unauthorized') {
					navigate('/login');
					toast.warning('User not Logged in, Login first', {
						style: {
							background: '#1e3257',
							margin: '7px',
							borderRadius: '7px',
							color: 'white',
							border: '1px solid gray',
						},
					});
				} else {
					toast.error('There was an error while getting the profile!', {
						style: {
							background: '#1e3257',
							margin: '7px',
							borderRadius: '7px',
							color: 'white',
							border: '1px solid gray',
						},
					});
				}
			} finally {
				setIsLoading(false);
			}
		};
		getData();
	}, []);

	if (isLoading) {
		return <Loader />;
	}
	let categories = {
		Ticket: [<Tickets profileInfo={profileInfo.orders} />],
		Team: [<Teams profileInfo={profileInfo} />],
	};

	const handleLogout = () => {
		navigate('/login');
		dispatch(removeLogin());
		localStorage.removeItem('token');
		toast.success('Logged out successfully!', {
			style: {
				background: '#1e3257',
				margin: '7px',
				borderRadius: '7px',
				color: 'white',
				border: '1px solid gray',
			},
		});
	};

	return (
		<div className=" md:w-[100%] w-[fit-content] bg-[#0f1b3] select-none rounded-xl">
			<div className="md:w-[85%] w-[100%] h-[100%] m-auto bg-[#0f1b34] text-white rounded-xl">
				<ProfileContext.Provider value={profileInfo}>
					<div className="flex md:flex-row flex-col h-[100%] rounded-xl border-sate-500 border-2 border-purple-900">
						<div className="flex flex-col flex-1 border-b-2 md:pr-2 border-violet-600">
							<div className="mx-auto md:w-[100%] w-[90%] border-4 flex flex-col items-center justify-center text-center md:flex-row md:justify-evenly h-[50%] border-teal-800">
								<div className="p-4 mx-auto md:p-1">
									<img
										src={profilePhoto}
										alt="ProfilePhoto"
										className="w-[140px] h-[140px] md:mx-auto rounded-md border-teal-950 ring-teal-400 border-4 m-2 ring-4 ring-offset-2 "
									/>
								</div>
								<div className="flex flex-col justify-evenly font-[Poppins] ">
									<h3 className="p-2 text-2xl text-cyan-400">
										{profileInfo.full_name}
									</h3>
									<p className="py-2 text-md">{profileInfo.username}</p>
								</div>
							</div>
							<div className="flex flex-row justify-evenly text-start font-[Poppins] border-slate-400 border4 border-l-0 border-t-0 border-b-0 border-r-0 h-[50%]">
								<div className="flex flex-col px-2 justify-evenly md:w-[40%] font-[Poppins] md:font-[AzonixRegular] text-blue-300 ">
									<p className="flex flex-row py-2 sm:py-0">
										<img
											src={Location}
											alt="Location"
											className="w-[21px] h-[21px] mr-2 hidden md:block"
										/>
										Institute :
									</p>
									<p className="flex flex-row py-2 sm:py-0">
										<img
											src={Email}
											alt="Email"
											className="w-[21px] h-[21px] mr-2 hidden md:block"
										/>
										Email :
									</p>
									<p className="flex flex-row py-2 sm:py-0">
										<img
											src={Call}
											alt="Call"
											className="w-[21px] h-[21px] mr-2 hidden md:block"
										/>
										Contact :
									</p>
									<p className="flex flex-row ">
										<img
											src={Orders}
											alt="Orders"
											className="w-[21px] h-[21px] mr-2 hidden md:block"
										/>
										Orders :
									</p>
								</div>
								<div className="flex flex-col  justify-evenly w-[55%] text-sm md:text-lg text-slate-300 text-center md:border-r-2 border-purple-700">
									<p className="border-t-2 border-b-2 border-teal-800 bg-blue-950">
										{profileInfo.institute}
									</p>
									<p className="py-1 text-sm border-t-2 border-b-2 border-teal-800 bg-blue-950">
										{profileInfo.email}
									</p>
									<p className="border-t-2 border-b-2 border-teal-800 bg-blue-950">
										{profileInfo.phone}
									</p>
									<p className="border-t-2 border-b-2 border-teal-800 bg-blue-950">
										{profileInfo.orders.length}
									</p>
								</div>
							</div>
						</div>
						<div className="flex-[1.7] flex flex-col md:justify-between mt-4 md:mt-0 m-0 md:mx-2">
							{' '}
							<div className="w-full px-2 pb-4 sm:px-0">
								<Tab.Group>
									<Tab.List className="flex p-1 space-x-1 rounded-xl bg-blue-900/20">
										{Object.keys(categories).map((category) => (
											<Tab
												key={category}
												className={({ selected }) =>
													classNames(
														'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
														'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
														selected
															? 'bg-white text-blue-700 shadow'
															: 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
													)
												}>
												{category}
											</Tab>
										))}
									</Tab.List>
									<Tab.Panels className="mt-2 min-h-[340px]">
										{Object.values(categories).map((posts, idx) => (
											<Tab.Panel
												key={Math.random(0, 1) * 113}
												className={classNames(
													'rounded-xl bg-[#0f1b34] p-3 md:px-3 px-0',
													'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none '
												)}>
												{posts}
											</Tab.Panel>
										))}
									</Tab.Panels>
								</Tab.Group>
							</div>
							<div className="flex justify-end w-[90%] my-1 md:my-2 mx-auto">
								<button
									className="relative inline-flex items-center self-end justify-start px-4 py-2 mb-3 mr-4 overflow-hidden font-medium text-white transition-all border-2 border-teal-600 rounded bg-inherit hover:bg-white group"
									onClick={handleLogout}>
									<span className="w-48 h-48 rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
									<span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
										Logout
									</span>
								</button>
							</div>
						</div>
					</div>
				</ProfileContext.Provider>
			</div>
		</div>
	);
};

export default Profile;
