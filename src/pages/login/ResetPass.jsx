import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Requests from '../../api/ApiList';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPass = () => {
	const { token, uid } = useParams();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const onReset = (data) => {
		toast.loading('Please wait ...');
		console.log({ token, uid, ...data });
		if (data.new_password !== data.confirm_password) {
			toast.dismiss();
			toast.warning('Passwords do not match!', {
				style: {
					background: '#1e3257',
					margin: '7px',
					borderRadius: '7px',
					color: 'white',
					border: '1px solid gray',
				},
			});
		} else {
			toast.dismiss();
			delete data.confirm_password;
			Requests.resetPassword({ token, uid, ...data })
				.then((res) => {
					console.log(res);
					if (res.data) {
						toast.success(res.data.message);
					}
					navigate('/login');
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.response.data.message);
				});
		}
	};
	return (
		<div className="appi grid mx-auto rounded-md border-2 border-blue-950 place-items-center w-[100%] h-[100%] bg-gradient-to-t from-[#09203f] to-[#173b57] shadow-xl">
			<div className="w-[80%] mx-auto flex flex-col items-start pt-4 m-2 justify-evenly text-slate-300 text-center">
				<h2 className="mx-auto my-1 text-2xl">Welcome Back!</h2>
				<p className="mx-auto mt-4 text-blue-400">
					Please Enter a new Password to continue..
				</p>
			</div>
			<form
				onSubmit={handleSubmit(onReset)}
				className="w-[340px] h-[400px] flex justify-evenly flex-col p-2 px-4">
				<div className="flex flex-col">
					<label
						htmlFor="
						username"
						className="py-1 text-blue-300 text-md">
						New Password
					</label>
					<input
						{...register('new_password', { maxLength: 20 })}
						id="pass"
						required=""
						className="font-[Poppins] bg-slate-700 text-white placeholder:text-[1.07rem] border border-gray-300 sm:text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 block w-[90%] mx-0 p-2 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="my-1">
					<label
						htmlFor="pass"
						className="block py-1 font-medium leading-6 text-blue-300 text-md">
						Confirm New Password
					</label>
					<input
						{...register('confirm_password', { maxLength: 20 })}
						id="confirm_pass"
						required=""
						className="font-[Poppins] bg-slate-700 text-white placeholder:text-[1.07rem] border border-gray-300 sm:text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 block w-[90%] mx-0 p-2 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="my-3 border-2 cursor-pointer focus:border-2 w-[40%] rounded-md text-slate-400 hover:text-white mx-auto py-1 hover:border-green-600 focus:text-blue-600">
					Confirm
				</button>
			</form>
		</div>
	);
};

export default ResetPass;
