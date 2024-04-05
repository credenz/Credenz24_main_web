import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Requests from '../../api/ApiList';
import { toast } from 'react-toastify';

const ForgotPass = () => {
	const { register, handleSubmit, formState: errors } = useForm();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		async function resetIt() {
			toast.loading('Please wait ...', {
				style: {
					background: '#1e3257',
					margin: '7px',
					borderRadius: '7px',
					color: 'white',
					border: '1px solid gray',
				},
			});
			Requests.forgetPassword(data)
				.then((res) => {
					console.log(res);
					toast.dismiss();
					toast.success('Email sent succesfully', {
						style: {
							background: '#1e3257',
							margin: '7px',
							borderRadius: '7px',
							color: 'white',
							border: '1px solid gray',
						},
					});
					// navigate('/resetpass');
				})
				.catch((err) => {
					console.log(err);
					toast.dismiss();
					toast.error('There was a error!', {
						style: {
							background: '#1e3257',
							margin: '7px',
							borderRadius: '7px',
							color: 'white',
							border: '1px solid gray',
						},
					});
				});
		}
		resetIt();
	};

	const backToLogin = () => {
		navigate('/login');
	};

	return (
		<div className="w-[100%] h-[100%] grid place-items-center">
			<div className="border-2 border-blue-950 md:w-[40%] px-4 text-center  sm:w-[80%] h-[400px] rounded-lg mx-2  p-2  bg-gradient-to-t from-[#09203f] to-[#173b57] shadow-xl flex flex-col justify-between">
				<p className="pb-2 mx-4 my-3 text-xl font-semibold text-blue-200 border-b-2 border-slate-400">
					Please Enter your Email to Continue A verification code will be sent
					on your Email
				</p>
				<div className="flex flex-row justify-center y-3 w-[100%]">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="md:w-[70%] sm:w-[100%]">
						<div className="font-[Poppins] bg-sky-950 border-2 text-blue-100 mx-auto border-blue-800  sm:text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 px-4 w-[90%]  dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  placeholder:text-[1.00rem] flex flex-row">
							<div className="mx-1 my-auto">
								<svg
									className="w-4 h-4 m-auto text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 16">
									<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
									<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
								</svg>
							</div>

							<input
								{...register('email')}
								placeholder="Email"
								type="email"
								className="font-[Poppins] bg-sky-950  text-blue-100 mx-auto  sm:text-sm rounded-lg focus:outline-none   block w-[90%] p-2.5 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white    placeholder:text-[1.00rem]"
								required
							/>
						</div>
						<button
							className="ring-2 mx-auto rounded-lg my-4 bg-blue-900 hover:bg-blue-950 text-slate-100 px-2 py-1 w-[fit-content] "
							type="submit">
							Send Reset Link
						</button>
					</form>
				</div>
				<button
					className="flex flex-col py-4 text-blue-400 underline hover:text-blue-200"
					onClick={backToLogin}>
					<p className="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mx-2 feather feather-arrow-left-circle">
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 8 8 12 12 16" />
							<line x1="16" y1="12" x2="8" y2="12" />
							<circle
								xmlns="http://www.w3.org/2000/svg"
								cx="12"
								cy="12"
								r="10"
							/>
							<polyline
								xmlns="http://www.w3.org/2000/svg"
								points="12 8 8 12 12 16"
							/>
							<line
								xmlns="http://www.w3.org/2000/svg"
								x1="16"
								y1="12"
								x2="8"
								y2="12"
							/>
						</svg>
						Back to Login
					</p>
				</button>
			</div>
		</div>
	);
};

export default ForgotPass;
