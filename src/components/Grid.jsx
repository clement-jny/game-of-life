export const Grid = ({ grid, setGrid }) => {
	return (
		<div>
			{grid.map((line, i) => (
				<div key={i}>
					{line.map((cell, j) => (
						<span
							key={j}
							className={`border inline-block h-6 aspect-square ${cell ? "bg-green-500" : "bg-red-500"}`}
							// style={{
							//     backgroundColor: cell ? colors.alive : colors.dead
							// }}
							onClick={() => {
								setGrid((previousGrid) => {
									//let newGrid = JSON.parse(JSON.stringify(previousGrid));
									let newGrid = structuredClone(previousGrid);
									newGrid[i][j] = !newGrid[i][j];
									return newGrid;
								});
							}}
						></span>
					))}
				</div>
			))}
		</div>
	);
};