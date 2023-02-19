import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generateGrid, step, createCanonPlanneur, createClignotant, CreatePlaneur } from "./Functions";

import { Grid } from "./grid";

export const Game = () => {
	// useEffect(() => {
	// 	window.onload = () => {
	// 		const local = window.localStorage;
	// 		if (local.length === 0 || JSON.parse(local.getItem("user") === null)) {
	// 			window.alert("You have to register first!");
	// 			window.history.go("/");
	// 			return;
	// 		}
	// 	}
	// }, []);

	const [grid, setGrid] = useState(generateGrid(20));
	const [counter, setCounter] = useState(0);

	const [btnValue, setBtnValue] = useState("Start");
	const [stop, setStop] = useState(true);

	const toggleStop = () => {
		if (stop) {
			setStop(false);
			setBtnValue("Stop");
		} else {
			setStop(true);
			setBtnValue("Start");
		}
	}

	useEffect(() => {
		let interval;

		if (!stop) {
			interval = setInterval(() => {
				setGrid((prevGrid) => step(prevGrid));
				setCounter((prevCounter) => prevCounter + 1);
			}, 250);
		} else {
			setGrid(generateGrid(20));
			setCounter(0);
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [stop])

	window.onload = () => {
		const blockSize = 30;

		const canvas = document.getElementById("canvas");
		canvas.width = canvas.parentElement.clientWidth;
		canvas.height = canvas.parentElement.clientHeight;

		const context = canvas.getContext("2d");

		context.save();

		context.fillRect(10, 10, blockSize, blockSize);
		context.fillRect(40, 10, blockSize, blockSize);
		context.fillRect(40, 40, blockSize, blockSize);
		context.fillRect(10, 40, blockSize, blockSize);

		context.restore();
	}

	return (
		<div className="h-screen personal-bg">
			<div className="flex flex-col justify-center items-center border-b border-b-black h-[20%]">
				<h1 className="text-5xl mb-3">{counter} generations</h1>

				<div className="space-x-4">
					<Link to="/" className="btn">Home</Link>

					<button className="btn btn-primary" onClick={() => { toggleStop() }}>{btnValue}</button>

					<button className="btn">Random</button>

					<button className="btn" onClick={() => { setGrid((previousGrid) => createClignotant(previousGrid)); }}>Blinker</button>

					<button className="btn" onClick={() => { setGrid((previousGrid) => CreatePlaneur(previousGrid)); }}>Glider</button>

					<button className="btn" onClick={() => { setGrid((previousGrid) => createCanonPlanneur(previousGrid)); }}>Canon glider</button>
				</div>
			</div>

			<div className="bg-slate-300 h-[80%]">
				

				{/* <Grid grid={grid} setGrid={setGrid} /> */}
				<canvas id="canvas"></canvas>
			</div>

			
		</div>
	);
}

// const handleClick = () => {
	//     setInterval(() => {
	//         console.log('log ?');
	//         setGrid((prevGrid) => step(prevGrid));
	//         setCounter((prevCounter) => prevCounter + 1);
	//     }, 250);
	// };



	// const startGame = () => {
	//     clearInterval(setCounter(0));
	//     setInterval(() => {
	//         setGrid((prevGrid) => step(prevGrid));
	//         setCounter((prevCounter) => prevCounter + 1);
	//     }, 250);
	// };

	// const resetGame = () => {
	//     clearInterval(setCounter(0))
	// };
	{/* <button onClick={startGame}>Start the game</button>
            <button onClick={resetGame}>Reset the game</button> */}