import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import ProfileContext from '../../utils/profileContext/ProfileContext';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Requests from '../../api/ApiList';
import Logo from './../../images/Images';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const MyTeam = () => {
	const profile = useContext(ProfileContext);
	const [teamInfo, setTeamInfo] = useState([]);
	const [loading, setLoading] = useState(true);

	// console.log(teamInfo);

	const copyToClipboard = (data) => {
		navigator.clipboard.writeText(data);
		toast.success('Copied to Clipboard successfully!');
	};

	useEffect(() => {
		const fetchTeamInfo = async () => {
			try {
				const response = await Requests.viewTeam();
				setTeamInfo(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching team information:', error);
				setLoading(false);
			}
		};

		fetchTeamInfo();
	}, []);

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : !teamInfo.length ? (
				<div className="mx-8 my-4 text-xl font-semi">No Team Created</div>
			) : (
				<div>
					{teamInfo.map((team) => (
						<div
							key={team.id}
							className="border-2 p-2 rounded-lg flex flex-row w-[94%] mx-auto justify-between">
							<div className="mx-2 my-auto border-2">
								<img
									src={Logo[teamInfo[0].event.event_id]}
									alt="Logo"
									width="100px"
									height="100px"
									className="bg-black"
								/>
							</div>
							<div className="flex flex-row p-2 border-2 justify-evenly">
								<div className="">
									<div className="grid grid-cols-2 p-2 border-2 justify-items-center align-center">
										<h2 className="px-1">Name</h2>
										<p>{team.team_name}</p>
									</div>
									<div>
										<div className="grid grid-cols-2 p-2 border-2 justify-items-center">
											<p>Team ID </p>
											<p>
												{team.team_id}

												<button onClick={() => copyToClipboard(team.team_id)}>
													<span id="default-icon">
														<svg
															class="w-3.5 h-3.5"
															aria-hidden="true"
															xmlns="http://www.w3.org/2000/svg"
															fill="currentColor"
															viewBox="0 0 18 20">
															<path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
														</svg>
													</span>
												</button>
											</p>
										</div>
									</div>
									<div className="grid grid-cols-2 p-2 border-2 justify-items-center">
										<pre className="text-center">{'Team \nPassword'}</pre>
										<p>
											{team.team_password}
											<button onClick={() => copyToClipboard(team.team_id)}>
												<span id="default-icon">
													<svg
														class="w-3.5 h-3.5"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="currentColor"
														viewBox="0 0 18 20">
														<path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
													</svg>
												</span>
											</button>
										</p>
									</div>
								</div>
							</div>
							<div className="w-[40%] border-2 p-2">
								<div className="">
									<h2>Team Members</h2>
									<ol>
										{team.user.map((user) => (
											<li key={user.email} className="p-1">
												{user.username}
											</li>
										))}
									</ol>
								</div>
								<p>Max Team Size: {team.event.group_size}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

const JoinTeam = () => {
	const { register, handleSubmit, formState: errors } = useForm();
	const onJoinTeam = (data) => {
		toast.info('Please wait...', {
			style: {
				background: '#1e3257',
				margin: '7px',
				borderRadius: '7px',
				color: 'white',
				border: '1px solid gray',
			},
		});
		Requests.joinTeam(data)
			.then((res) => {
				toast.dismiss();
				if (res.data.message === 'User added to Team') {
					toast.success('Joined Successfully', {
						style: {
							background: '#1e3257',
							margin: '7px',
							borderRadius: '7px',
							color: 'white',
							border: '1px solid gray',
						},
					});
				} else {
					toast.warning(res.data.message, {
						style: {
							background: '#1e3257',
							margin: '7px',
							borderRadius: '7px',
							color: 'white',
							border: '1px solid gray',
						},
					});
				}
			})
			.catch((err) => {
				toast.dismiss();
				toast.error(err.response.data.message, {
					style: {
						background: '#1e3257',
						margin: '7px',
						borderRadius: '7px',
						color: 'white',
						border: '1px solid gray',
					},
				});
			});
	};
	return (
		<div className="w-[100%] md:w-[64%] mx-auto gird items-center border-2 rounded-md border-violet-500 p-2">
			<form
				onSubmit={handleSubmit(onJoinTeam)}
				className="w-[100%] flex flex-col p-2 my-8 ">
				<label htmlFor="TeamName" className="w-[100%] mx-auto mt-4 text-lg">
					Enter Team Id
				</label>
				<input
					{...register('team_id', { maxLength: 15 })}
					placeholder="Team ID"
					className="bg-blue-950 text-lg py-3 font-semibold text-slate-100 border-none placeholder:text-[1.07rem] border mx-auto border-gray-300 sm:text-sm rounded-lg focus:outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700 block p-2 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-4  my-4 w-[100%]"
					required
				/>
				<button
					type="submit"
					className="mx-[35%] py-2 px-4 border-2 m-2 rounded-lg text-green-500 border-cyan-400 hover:text-cyan-50 hover:bg-blue-950">
					Join
				</button>
			</form>
		</div>
	);
};

const CreateTeam = () => {
	const navigate = useNavigate();
	const totalsum = useSelector((state) => state.cart.totalsum);
	const { register, handleSubmit, formState: errors } = useForm();
	const eventsList = [
		{ title: 'Clash', id: 101 },
		{ title: 'Reverse Coding', id: 102 },
		// { title: 'NTH', id: 103 },
		// { title: 'Wallstreet', id: 104 },
		{ title: 'B-Plan', id: 105 },
		{ title: 'Enigma', id: 106 },
		// { title: 'Datawiz', id: 107 },
		{ title: 'Quiz', id: 108 },
		{ title: 'Cretronix', id: 109 },
		{ title: 'Web Weaver', id: 110 },
		{ title: 'Roboliga', id: 111 },
	];

	const onCreateTeam = (data) => {
		console.log(data);
		if (totalsum === 0) {
			toast.warning('Buy an event first!', {
				style: {
					background: '#1e3257',
					margin: '7px',
					borderRadius: '7px',
					color: 'white',
					border: '1px solid gray',
				},
			});
			navigate('/events');
		} else {
			if (data.event_id === 'Choose an Event') {
				toast.warning('Select an event first', {
					style: {
						background: '#1e3257',
						margin: '7px',
						borderRadius: '7px',
						color: 'white',
						border: '1px solid gray',
					},
				});
			} else {
				Requests.createTeam(data)
					.then((res) => {
						console.log(res);
						if (
							res.data.message === 'No order exists for this user and event.'
						) {
							toast.info(res.data.message, {
								style: {
									background: '#1e3257',
									margin: '7px',
									borderRadius: '7px',
									color: 'white',
									border: '1px solid gray',
								},
							});
						} else if (
							res.data.message ===
							'Team already exists for this user and event.'
						) {
							toast.warning(res.data.message, {
								style: {
									background: '#1e3257',
									margin: '7px',
									borderRadius: '7px',
									color: 'white',
									border: '1px solid gray',
								},
							});
						} else {
							toast.info('Your team Id is ' + res.data.message, {
								style: {
									background: '#1e3257',
									margin: '7px',
									borderRadius: '7px',
									color: 'white',
									border: '1px solid gray',
								},
							});
							toast.success('Team created successfully!', {
								style: {
									background: '#1e3257',
									margin: '7px',
									borderRadius: '7px',
									color: 'white',
									border: '1px solid gray',
								},
							});
						}
					})
					.catch((err) => console.log(err));
			}
		}
	};
	return (
		<form
			onSubmit={handleSubmit(onCreateTeam)}
			className="md:w-[70%] w-[100%] mx-auto px-2 h-[300px] flex flex-col justify-evenly border-2 rounded-md border-violet-500 my-4">
			<label
				htmlFor="TeamName"
				className="w-[80%] text-lg mx-auto text-slate-300">
				Enter Team Name
			</label>
			<input
				{...register('team_name', { minLength: 4 })}
				placeholder="Username"
				className="!bg-sky-900 placeholder:text-[1.07rem] border-2 mx-auto border-blue-800 px-4 sm:text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 block p-2 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[80%] border-none"
				required
			/>
			<label
				htmlFor="countries"
				className="block mx-auto text-lg dark:text-white w-[80%] text-slate-300">
				Select an option
			</label>
			<select
				{...register('event_id')}
				id="countries"
				className="bg-sky-900 text-slate-300 border border-gray-300 border-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:ring-2 dark:focus:border-blue-500 font-semibold focus:outline-none"
				// required
			>
				<option selected>Choose an Event</option>
				{eventsList.map((events) => (
					<option value={events.id} key={events.id}>
						{events.title}
					</option>
				))}
			</select>
			<button
				type="submit"
				className="mx-[35%]  py-2 px-2 border-2 m-2 rounded-lg text-green-500 border-cyan-400 hover:text-cyan-50 hover:bg-blue-950">
				Create
			</button>
		</form>
	);
};

export default function Teams() {
	let [categories] = useState({
		My: [<MyTeam />],
		Create: [<CreateTeam />],
		Join: [<JoinTeam />],
	});

	return (
		<div className="w-full max-w-xl px-2 py-4 mx-auto sm:px-0">
			<Tab.Group>
				<Tab.List className="flex p-1 space-x-1 rounded-xl bg-blue-900/20">
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
									'ring-white/60 ring-offst-2 ring-offset-lue-400 focus:outline-none focus:ring-2',
									selected
										? 'bg-violet-950 text-blue-200 shadow'
										: 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
								)
							}>
							{category + ' Team'}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2 min-h-[300px] font-[Poppins] md:font-[AzonixRegular]">
					{Object.values(categories).map((posts, idx) => (
						<Tab.Panel
							key={idx * Math.random()}
							className={classNames(
								'rounded-xl bg-[#0f1b34] p-3 px-0 md:px-3',
								'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring2'
							)}>
							{posts}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}
