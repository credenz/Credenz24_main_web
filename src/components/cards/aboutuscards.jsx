import Tabs from '../ui/tabs.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Cred23 from '../../assets/AboutPisb/Credenz23.jpg';
import cred24logo from '../../assets/AboutPisb/Credenz_logo.jpg';
import Ping18 from '../../assets/AboutPisb/ping18.jpg';
import './aboutcards.css';
export function TabsDemo() {
	const tabs = [
		{
			title: 'CREDENZ',
			value: 'credenz',
			content: (
				<div className="relative w-full h-full p-10 overflow-y-auto text-sm text-center text-white md:text-lg rounded-2xl bg-gradient-to-br from-sky-900 to-indigo-900">
					<Credenz />
				</div>
			),
		},
		{
			title: 'PISB',
			value: 'pisb',
			content: (
				<div className="relative w-full h-full p-10 overflow-y-auto text-sm text-center text-white border-2 border-blue-400 md:text-lg rounded-2xl bg-gradient-to-br from-sky-900 to-indigo-900">
					<PISB />
				</div>
			),
		},
		{
			title: 'P.I.N.G',
			value: 'ping',
			content: (
				<div className="relative w-full h-full p-4 overflow-y-auto text-sm text-center text-white border-2 border-blue-400 md:p-10 md:text-lg rounded-2xl bg-gradient-to-br from-sky-900 to-indigo-900">
					<PING />
				</div>
			),
		},
	];

	return (
		<div className="custom md:h-[38rem] lg:h-[38rem] w-full [perspective:1000px] relative b flex flex-col md:w-full lg:w-[80%] mx-auto  items-start justify-start my-40">
			<Tabs tabs={tabs} />
		</div>
	);
}

const Credenz = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-center text-xl md:text-3xl">CREDENZ</div>
			<LazyLoadImage
				src={cred24logo}
				alt="dummy LazyLoadImage"
				width="500"
				height="500"
				className="mx-auto im rounded-xl"
			/>

			<div className="fon flex text-justify font-[Poppins] leading-relaxed text-base">
				Credenz, organized by the PICT IEEE Student Branch, is an annual
				technical festival that began in 2004. It has become one of Pune's
				premier technical events, aiming to inspire participants to bring out
				their best. Credenz offers a diverse range of seminars and workshops
				that help expand participants' knowledge in the ever-evolving field of
				technology, while also instilling a competitive spirit among them. With
				events like Clash, B Plan, WebWeaver, Cretronix, Wall Street, and
				DataWiz, participants have ample opportunities to explore their talents
				and succeed. Credenz is a unique opportunity for students to surpass the
				conventional boundaries of academia and unlock their full potential. The
				PICT IEEE Student Branch's vision is to promote learning and exploration
				through Credenz, creating a platform for individuals to nurture their
				skills and achieve their goals.
			</div>
		</div>
	);
};
const PISB = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-center text-xl md:text-3xl">
				PICT IEEE Student Branch (PISB)
			</div>
			<LazyLoadImage
				src={Cred23}
				alt="dummy LazyLoadImage"
				width="1000"
				height="1000"
				className="mx-auto im1 rounded-xl"
			/>
			<div className="fon flex text-justify font-[Poppins] leading-relaxed text-base">
				PICT IEEE Student Branch or PISB was founded in 1988, with the primary
				goal of fostering technical awareness and knowledge among its student
				members. PISB endeavors to keep its members informed about the latest
				technology trends in various fields. Two significant events are hosted
				by PISB each year, namely Credenz and Credenz Tech Dayz. Credenz is
				conducted in even semesters, while Credenz Tech Dayz takes place in odd
				semesters. Additionally, PISB has a Women in Engineering (WIE) chapter
				dedicated to empowering women.
			</div>
		</div>
	);
};
const PING = () => {
	return (
		<div className="flex flex-col gap-4 ">
			<div className="flex justify-center text-xl md:text-3xl">
				PICT IEEE NEWSLETTER GROUP (P.I.N.G.)
			</div>
			<LazyLoadImage
				src={Ping18}
				alt="dummy LazyLoadImage"
				width="1000"
				height="1000"
				className="mx-auto im rounded-xl"
			/>
			<div className="fon leading-relaxed text-base flex text-sm text-justify  font-[Poppins]">
				P.I.C.T. IEEE Newsletter Group or P.I.N.G. is an annual technical
				magazine that is published by the student members of PICT IEEE Student
				Branch (PISB). It serves as a platform for technology enthusiasts to
				showcase their technical expertise. P.I.N.G. features articles on
				cutting-edge technologies from technocrats worldwide and includes
				interviews with distinguished personalities in various technical
				domains. The magazine's primary objective is to keep its readers
				informed about recent technology advancements and guide them towards
				modernization. With the upcoming release of Issue 18.1, prepare yourself
				to be 'P.I.N.G.'d.
			</div>
		</div>
	);
};
