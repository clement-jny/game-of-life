import {
	step,
	createCanonPlanneur,
	createClignotant,
	CreatePlaneur,
} from "./Functions";
//import { useEffect } from "react";

export const Panel = ({ setGrid, setCounter }) => {
	// const handleClick = () => {
	//     setInterval(() => {
	//         console.log('log ?');
	//         setGrid((prevGrid) => step(prevGrid));
	//         setCounter((prevCounter) => prevCounter + 1);
	//     }, 250);
	// };

	// useEffect(() => {
	//     const interval = setInterval(() => {
	//         setGrid((prevGrid) => step(prevGrid));
	//         setCounter((prevCounter) => prevCounter + 1);
	//     }, 250);
	//     return () => clearInterval(interval);
	// });

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

	return (
		<>
			<h1 className={`title`}>Settings panel</h1>

			{/* <button onClick={startGame}>Start the game</button>
            <button onClick={resetGame}>Reset the game</button> */}

			<button
				onClick={() => {
					setGrid((prevGrid) => step(prevGrid));
					setCounter((prevCounter) => prevCounter + 1);
				}}
			>
				Increment the counter
			</button>

			<button>Génération aléatoire</button>

			<button
				onClick={() => {
					setGrid((previousGrid) => createClignotant(previousGrid));
				}}
			>
				Clignotant
			</button>

			<button
				onClick={() => {
					setGrid((previousGrid) => CreatePlaneur(previousGrid));
				}}
			>
				Planeur seul
			</button>

			<button
				onClick={() => {
					setGrid((previousGrid) =>
						createCanonPlanneur(previousGrid)
					);
				}}
			>
				Canon à planneur
			</button>
		</>
	);
};
