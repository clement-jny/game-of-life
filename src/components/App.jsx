import { useState } from "react";

import { Grid } from "./Grid";
import { Panel } from "./Panel";
import { Header } from "./Header";

import { generateGrid } from "./Functions";

export const App = () => {
	const [grid, setGrid] = useState(generateGrid(20));
	const [counter, setCounter] = useState(0);

	return (
		<>
			<div className={`left`}>
				<Header counter={counter} />

				<Grid grid={grid} setGrid={setGrid} />
			</div>

			<div className={`right`}>
				<Panel setGrid={setGrid} setCounter={setCounter} />
			</div>
		</>
	);
};
