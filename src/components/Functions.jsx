export const generateGrid = (size) =>
	Array.from({ length: size }, () =>
		Array.from({ length: size }, () => false)
	);

const getNextState = (isAlive, numberOfAliveNeighbours) =>
	isAlive
		? numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3
		: numberOfAliveNeighbours === 3;

const isOutOfBound = ({ length }, { x, y }) =>
	x < 0 || y < 0 || x >= length || y >= length;

const countAliveNeightbour = (grid, { x, y }) =>
	[
		[x - 1, y - 1],
		[x - 1, y],
		[x - 1, y + 1],
		[x, y - 1],
		[x, y + 1],
		[x + 1, y - 1],
		[x + 1, y],
		[x + 1, y + 1],
	].filter(([i, j]) => !isOutOfBound(grid, { x: i, y: j }) && grid[i][j])
		.length;

export const step = (grid) => {
	//const newGrid = JSON.parse(JSON.stringify(grid));
	const newGrid = structuredClone(grid);

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			newGrid[i][j] = getNextState(
				grid[i][j],
				countAliveNeightbour(grid, { x: i, y: j })
			);
		}
	}

	return newGrid;
};

export const createClignotant = (grid) => {
	const newGrid = JSON.parse(JSON.stringify(grid));

	newGrid[7][8] = true;
	newGrid[7][9] = true;
	newGrid[7][10] = true;

	return newGrid;
};

export const CreatePlaneur = (grid) => {
	const newGrid = JSON.parse(JSON.stringify(grid));

	newGrid[0][1] = true;
	newGrid[1][2] = true;
	newGrid[2][0] = true;
	newGrid[2][1] = true;
	newGrid[2][2] = true;

	return newGrid;
};

export const createCanonPlanneur = (grid) => {
	const newGrid = JSON.parse(JSON.stringify(grid));

	return newGrid;
};
