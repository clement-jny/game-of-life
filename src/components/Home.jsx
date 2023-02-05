import { Link } from "react-router-dom";
import '../styles/home.css';

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
		// <div className="home">
        //     <div className="div--flex">
        //         <div className="div--flex-item">
        //             <h1 className="h1--home">Home</h1>
        //         </div>
		// 		<div className="div--flex-item">
		// 			<Link className="link--home" to="/about">About</Link>
		// 		</div>
		// 		<div className="div--flex-item">
		// 			<Link className="link--home" to="/projects">Projects</Link>
		// 		</div>
		// 		<div className="div--flex-item">
		// 			<Link className="link--home" to="/blog">Blog</Link>
		// 		</div>
		// 		<div className="div--flex-item">
		// 			<Link className="link--home" to="/contact">Contact</Link>
		// 		</div>
		// 		<div className="div--flex-item">

		// 			<Link className="link--home" to="/resume">Resume</Link>
		// 		</div>
		// 	</div>
		// </div>
		

		<div className={`container--flex`}>
			
				{/* <img src={gliders[gliderIndex]} alt={`glider`} />
				<img src={blinkers[blinkerIndex]} alt={`blinker`} /> */}

				<h1 className={`container__title`}>Game Of Life</h1>
				<Link to={`/signup`} className={`container__link`}>Signup to play!</Link>
				<Link to={`/information`} className={`container__link`}>Information</Link>
				<Link to={`/contact`} className={`container__link`}>Contact</Link>
		</div>
	);
};