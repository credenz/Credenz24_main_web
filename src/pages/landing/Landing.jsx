import { Environment, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import Experience from './Experience';
import LoadPage from '../loading/LoadPage';
import './Experience.css';
import Ocean from './Ocean.jsx';
import Ocean2 from './Ocean2.jsx';
import Bubble1 from '../../models/Bubble1.jsx';
import UnderwaterBubbles from '../../components/Bubbles.jsx';

export default function Landing() {
	const [explore3D, setExplore3D] = useState(false);
	const [exploreUnderwater, setExploreUnderwater] = useState(false);
	const [showToggle, setShowToggle] = useState(false);
	const { progress } = useProgress();

	useEffect(() => {
		// console.log(progress)
		if (progress >= 90) {
			setShowToggle(true);
		}
	}, [progress]);

	return (
		<>
			{showToggle && (
				<div className="controller">
					<div className="flex-row mb-28 toggle-div font-[Poppins]">
						{!exploreUnderwater && (
							<div className="switch-container">
								<div className="container">
									<input
										type="checkbox"
										name="checkbox"
										value="checkbox"
										checked={explore3D}
										id="checkbox1"
										onChange={(e) => setExplore3D(e.target.checked)}
									/>
									<label className="label1" htmlFor="checkbox1"></label>
								</div>
								<p className="toggle-tag">
									Explore
									<br /> 3D
								</p>
							</div>
						)}
						{!explore3D && (
							<div className="switch-container">
								<div className="container">
									<input
										type="checkbox"
										name="checkbox"
										value="checkbox"
										checked={exploreUnderwater}
										id="checkbox2"
										onChange={(e) => setExploreUnderwater(e.target.checked)}
									/>
									<label className="label2" htmlFor="checkbox2"></label>
								</div>
								<p className="toggle-tag">Explore UnderWater</p>
							</div>
						)}
					</div>
				</div>
			)}
			{/* loading page fallback */}
			{/* <fog color={'#161616'} attach={'fog'} near={2} far={20}/> */}
			{/* <Bubble layer={10}/> */}
			{/* <Skybox/> */}
			{/* <Bubble2/> */}
			<Canvas className="canvas" shadows={true}>
				<Suspense fallback={<LoadPage />}>
					{/* <LoadPage/> */}

					<Experience explore={explore3D} exploreUW={exploreUnderwater} />
					<Ocean />
					<Ocean2 />
					<Bubble1 />
					<UnderwaterBubbles count={700} />
					<Environment files={'/models/nightSky_underwater-1.hdr'} background />

					<ambientLight intensity={0.5} />
					<directionalLight position={[2, 20, 0]} intensity={0.5} />
				</Suspense>
			</Canvas>
		</>
	);
}
