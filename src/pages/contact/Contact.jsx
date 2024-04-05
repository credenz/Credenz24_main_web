import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Carousel from '../../components/Carousel';
import ContactProfileCard from '../../components/cards/ContactProfileCard';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './contactus.css';
import { SignupForm } from '../../components/forms/Form';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import imgsh from '../../assets/admin-photos/Shruti_Shinde2.jpg';
import imgpp from '../../assets/admin-photos/vcnew3.jpg';
import imghs from '../../assets/admin-photos/Harshk.jpg';
import imgkrn from '../../assets/admin-photos/karanmun.jpg';
import imgjy from '../../assets/admin-photos/jeeya.jpg';
import imgkl from '../../assets/admin-photos/Kaushal.jpg';
import Card from '../../components/cards/ProfileCard';
import { useWindowSize } from 'react-use';

const Contact = () => {
	const { width } = useWindowSize();
	const [pages, setPages] = useState(3.2);
	const [offset, setOffset] = useState(2);
	useEffect(() => {
		// Update pages and offset values based on screen width
		if (width < 425) {
			setPages(2.7); // Set pages value for small screens
			setOffset(1.8);
		} else if (width >= 425 && width < 768) {
			setPages(2.8); // Set pages value for small screens
			setOffset(1.8);
		} else {
			setPages(3.2); // Set pages value for larger screens
			setOffset(2.2); // Set offset value for larger screens
		}
	}, [width]); // Update whenever width changes
	let cards = [
		{
			key: uuidv4(),
			content: <Card imagen={imgpp} name={'Prasanna Pande'} />,
		},
		{
			key: uuidv4(),
			content: <Card imagen={imghs} name={'Harsh Khandelwal'} />,
		},
		{
			key: uuidv4(),
			content: <Card imagen={imgsh} name={'Shruti Shinde'} />,
		},
		{
			key: uuidv4(),
			content: <Card imagen={imgkrn} name={'Karan Mundhada'} />,
		},
		{
			key: uuidv4(),
			content: <Card imagen={imgjy} name={'Jeeya Shah'} />,
		},
		{
			key: uuidv4(),
			content: <Card imagen={imgkl} name={'Kaushal Lande'} />,
		},
	];
	return (
		<>
			<div className="contactus ">
				<Parallax
					pages={3.2}
					style={{ top: '0', left: '0' }}
					className="animation  bg-[#080E3E]">
					<ParallaxLayer offset={0} speed={0.25}>
						<div className="animation_layer parallax" id="bglayer"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={2}>
						<div className="animation_layer parallax" id="bubbles"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.3}>
						<div className="animation_layer parallax" id="layer0"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-0.1}>
						<div className="animation_layer parallax" id="layer1"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.3}>
						<div className="animation_layer parallax" id="layer2"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax" id="layer3"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-0.3}>
						<div className="flex items-start justify-center font-extrabold text-center text-sky-200 align-middle animation_layer parallax mt-20 md:mt-1 text-5xl sm:text-7xl md:text-7xl lg:text-9xl">
							<p className="mt-[20%]">Contact Us</p>
						</div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.5}>
						<div className="animation_layer parallax" id=""></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.45}>
						<div className="animation_layer parallax" id="layer5"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.4}>
						<div className="animation_layer parallax" id="layer6"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax" id="layer7"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax" id="layer8"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax" id="layer9"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax" id="layer10"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax" id="layer11"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax" id="layer12"></div>
					</ParallaxLayer>
					<ParallaxLayer
						className="animation_layer parallax"
						offset={1}
						speed={0.25}>
						<div className="neww flex-col m-5 ">
							<div className="text-center text-2xl  md:text-2xl lg:text-3xl text-sky-200">
								Admin Team
							</div>
							<div className="flex justify-around gap-5 m-10 cardb">
								<Card
									imagen={imghs}
									name={'Harsh Khandelwal'}
									posi={'Joint Secretary'}
									ph={'9'}
									mailid={'harshkhandelwal2525@gmail.com'}
									lknid={'https://www.linkedin.com/in/harsh-khandelwal2525/'}
								/>

								<Card
									imagen={imgpp}
									name={'Prasanna Pande'}
									posi={'Vice ChairPerson'}
									mailid={'prasannap2003@gmail.com'}
									lknid={'https://www.linkedin.com/in/prasanna-pande-6b3672204'}
								/>
								<Card
									imagen={imgsh}
									name={'Shruti Shinde'}
									mailid={'shindeshru2208@gmail.com'}
									lknid={
										'https://www.linkedin.com/in/shruti-shinde22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
									}
									posi={'Joint Secretary'}
								/>
							</div>
							<div className="flex justify-around gap-5 m-10 cardb">
								<Card
									imagen={imgkrn}
									name={'Karan Mundhada'}
									lknid={
										'https://www.linkedin.com/in/karan-mundhada-075b071b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
									}
									mailid={'karanmundhada@gmail.com'}
									posi={'Joint Secretary'}
								/>
								<Card
									imagen={imgjy}
									name={'Jeeya Shah'}
									mailid={'jeeyashah201@gmail.com'}
									lknid={
										'https://www.linkedin.com/in/jeeya-shah-a217b822a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
									}
									posi={'Public Relations officer'}
								/>
								<Card
									imagen={imgkl}
									name={'Kaushal Lande'}
									posi={'Public Relations officer'}
								/>
							</div>
						</div>

						<div className="oldd mr-20 ">
							<Carousel cards={cards} height="500px" width="100%" />
						</div>
						<iframe
							className=" rounded-3xl px-10 py-6  md:p-2 w-full flex justify-center md:hidden  h-[28rem]   md:w-1/2 mb-8"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.304775421915!2d73.84210028503307!3d18.457541900113636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1678165753590!5m2!1sen!2sin"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							title="map"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</ParallaxLayer>
					<ParallaxLayer
						offset={2.2}
						className="animation_layer parallax"
						speed={0.3}>
						<div className="flex flex-col mb-80 md:mb-60 lg:mb-[38] p-2 md:flex-row">
							<div className="  w-full p-6 md:p-5 mb-10 sm:ml-20 md:mx-5 md:mb-20 md:w-1/2">
								<BackgroundGradient>
									<SignupForm></SignupForm>
								</BackgroundGradient>
							</div>

							<iframe
								className="hidden md:block rounded-3xl p-4  sm:mb-20  md:w-1/2 m-4"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.304775421915!2d73.84210028503307!3d18.457541900113636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1678165753590!5m2!1sen!2sin"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								title="map"
								referrerPolicy="no-referrer-when-downgrade"></iframe>

							{/* <button className='newform'>Submit Feedback</button> */}
						</div>
					</ParallaxLayer>
				</Parallax>
			</div>
		</>
	);
};

export default Contact;
