import { Link } from "react-router-dom";
// import '../styles/home.css';

// import blinker_1 from "../assets/svg/blinker/blinker_1.svg";
// import blinker_2 from "../assets/svg/blinker/blinker_2.svg";

// import glider_1 from "../assets/svg/glider/glider_1.svg";
// import glider_2 from "../assets/svg/glider/glider_2.svg";
// import glider_3 from "../assets/svg/glider/glider_3.svg";
// import glider_4 from "../assets/svg/glider/glider_4.svg";

// import { useState, useEffect } from "react";

// const gliders = [glider_1, glider_2, glider_3, glider_4];
// const blinkers = [blinker_1, blinker_2];

export const Home = () => {
	// const [gliderIndex, setGliderIndex] = useState(0);
	// const [blinkerIndex, setBlinkerIndex] = useState(0);

	// useEffect(() => {
	// 	const myInterval = setInterval(() => {
	// 		setGliderIndex((prev) => (prev + 1) % gliders.length);
	// 		setBlinkerIndex((prev) => (prev + 1) % blinkers.length);
	// 	}, 500);

	// 	return () => clearInterval(myInterval);
	// }, []);

	return (
		<div className="h-screen flex flex-col justify-center items-center personal-bg">

			{/* <img src={gliders[gliderIndex]} alt={`glider`} />
				<img src={blinkers[blinkerIndex]} alt={`blinker`} /> */}
			
			<h1 className="text-7xl mb-5">Game Of Life</h1>

			<div className="flex space-x-7">
				<Link to="/signup" className="btn btn-outline">Sign-up</Link>
				<Link to="/signin" className="btn btn-outline">Sign-in</Link>
			</div>

			<div className="flex space-x-7 mt-3">
				<Link to="/game" className="btn btn-outline">Game</Link>
			</div>
		</div>
	);
};
