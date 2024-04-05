import React from 'react';
import Not_Found from '../../images/404_not_found.svg';

const Error = () => {
	return (
		<div className="h-[100%] w-[100%] flex">
			<div className="flex-col m-auto mx-auto md:w-[50%] sm:w-[100%] sm:my-auto h-[300px] flex justify-center items-center shadow-2xl border-2 border-blue-600 rounded-md md:bg-gradient-to-b from-[#002347] to-[#0f1b34] my-auto">
				<div>
					<p className="text-5xl text-sky-500 text-center	px-3">404</p>
					<p className="text-3xl text-sky-500 text-center	">Not Found!</p>
				</div>
				<p className="text-center p-2 m-2 text-slate-400">
					Page you are looking for could not be found!
				</p>
			</div>
		</div>
	);
};

export default Error;
