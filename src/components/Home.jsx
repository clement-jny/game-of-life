import { Link, Outlet } from "react-router-dom";

import blinker_1 from "../assets/svg/blinker/blinker_1.svg";
import blinker_2 from "../assets/svg/blinker/blinker_2.svg";

import glider_1 from "../assets/svg/glider/glider_1.svg";
import glider_2 from "../assets/svg/glider/glider_2.svg";
import glider_3 from "../assets/svg/glider/glider_3.svg";
import glider_4 from "../assets/svg/glider/glider_4.svg";

import { useState, useEffect } from "react";

const gliders = [glider_1, glider_2, glider_3, glider_4];
const blinkers = [blinker_1, blinker_2];

export const Home = () => {
	const [gliderIndex, setGliderIndex] = useState(0);
	const [blinkerIndex, setBlinkerIndex] = useState(0);

	useEffect(() => {
		const myInterval = setInterval(() => {
			setGliderIndex((prev) => (prev + 1) % gliders.length);
			setBlinkerIndex((prev) => (prev + 1) % blinkers.length);
		}, 500);

		return () => clearInterval(myInterval);
	}, []);

	return (
		<div>
			{/* <div class="blinker"></div> */}

			{/* <img className={`blinker`} src={blinker} alt={"blinker"} /> */}

			<img src={gliders[gliderIndex]} alt={`glider`} />
			<img src={blinkers[blinkerIndex]} alt={`blinker`} />

			{/* {
                gliders.map((glider, index) => (
                    <img className={`glider`} src={glider} alt={`glider`} key={index} />
                ))
            } */}

			{/* <img className={`glider`} src={glider_1} alt={`glider`} />
            <img className={`glider`} src={glider_2} alt={`glider`} />
            <img className={`glider`} src={glider_3} alt={`glider`} />
            <img className={`glider`} src={glider_4} alt={`glider`} /> */}

			{/* <div class="blinker">
				<svg viewBox="0 0 100 100">
					<rect x="0" y="0" height="100" width="100" fill="#f00" />
				</svg>
			</div> */}

			{/* <div class="glider"></div> */}

			{/* <div className="boxs">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div> */}
			{/* <h1>Game Of Life</h1> */}
			{/* <Link to="/test">Test</Link> */}
			{/* <div><Outlet /></div> */}
		</div>
	);
};
