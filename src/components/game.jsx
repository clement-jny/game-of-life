import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generateGrid, step, createCanonPlanneur, createClignotant, CreatePlaneur } from "./Functions";

import { Grid } from "./grid";

class Cell {
	static blockSize = 10;

	constructor(context, posX, posY) {
		this.context = context;

		//Store the position of this cell in the grid
		this.posX = posX;
		this.posY = posY;

		//Make random square alive
		this.alive = Math.random() > 0.5; //% of alive cell, if result of Math.random is upper than 0.5 then make this cell alive. Like 50% maybe
	}

	draw() {
		//Draw a square, let the state determine the color
		this.context.fillStyle = this.alive ? "#ff8080" : "#303030"; //? #22C55E : #EF4444
		this.context.fillRect(this.posX * Cell.blockSize, this.posY * Cell.blockSize, Cell.blockSize, Cell.blockSize);
	}
}

class Board {
	static columns = 100; //canvas width / Cell.blockSize
	static rows = 60; //canvas height / Cell.blockSize

	constructor(canvas, width, height) {
		this.canvas = canvas;

		this.canvas.width = width;
		this.canvas.height = height;

		//this.colums = width / Cell.blockSize;
		//this.rows = height / Cell.blockSize;

		this.context = this.canvas.getContext("2d");

		this.gameObjects = [];

		this.createGrid();

		// Request an animation frame for the first time
		// The gameLoop() function will be called as a callback of this request
		window.requestAnimationFrame(() => this.gameLoop());
	}

	createGrid() {
		for (let y = 0; y < Board.rows; y++) {
			for (let x = 0; x < Board.columns; x++) {
				this.gameObjects.push(new Cell(this.context, x, y));
			}
		}
	}

	isAlive(x, y)
	{
		if (x < 0 || x >= Board.columns || y < 0 || y >= Board.rows){
			return false;
		}

		return this.gameObjects[this.gridToIndex(x, y)].alive ? 1 : 0;
	}

	gridToIndex(x, y){
		return x + (y * Board.columns);
	}

	checkSurrounding ()
	{
		// Loop over all cells
		for (let x = 0; x < Board.columns; x++) {
			for (let y = 0; y < Board.rows; y++) {

				// Count the nearby population
				let numAlive = this.isAlive(x - 1, y - 1) + this.isAlive(x, y - 1) + this.isAlive(x + 1, y - 1) + this.isAlive(x - 1, y) + this.isAlive(x + 1, y) + this.isAlive(x - 1, y + 1) + this.isAlive(x, y + 1) + this.isAlive(x + 1, y + 1);
				let centerIndex = this.gridToIndex(x, y);

				if (numAlive == 2) {
					// Do nothing
					this.gameObjects[centerIndex].nextAlive = this.gameObjects[centerIndex].alive;
				} else if (numAlive == 3) {
					// Make alive
					this.gameObjects[centerIndex].nextAlive = true;
				} else {
					// Make dead
					this.gameObjects[centerIndex].nextAlive = false;
				}
			}
		}

		// Apply the new state to the cells
		for (let i = 0; i < this.gameObjects.length; i++) {
			this.gameObjects[i].alive = this.gameObjects[i].nextAlive;
		}
	}

	gameLoop() {
		// Check the surrounding of each cell
		this.checkSurrounding();

		// Clear the screen
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// Draw all the gameobjects
		for (let i = 0; i < this.gameObjects.length; i++) {
			this.gameObjects[i].draw();
		}

		// The loop function has reached it's end, keep requesting new frames
		setTimeout( () => {
			window.requestAnimationFrame(() => this.gameLoop());
		}, 100)
	}
}

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


	//const [canvas, setCanvas] = useState(document.getElementById("canvas"));
	//const [board, setBoard] = useState(new Board(canvas, 1000, 600));

	const [grid, setGrid] = useState(generateGrid(40));
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
				//setGrid((prevGrid) => step(prevGrid));
				setCounter((prevCounter) => prevCounter + 1);
			}, 250);
		} else {
			//setGrid(generateGrid(20));
			setCounter(0);
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [stop])

	useEffect(() => {
		var canvas = document.getElementById("canvas");
		new Board(canvas, canvas.parentElement.clientWidth, canvas.parentElement.clientHeight - 7);
	}, []);

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

			<div className="bg-slate-300 h-[80%] flex justify-center items-center">
				

				<canvas id="canvas"></canvas>
			</div>

			{/* <div>
				<Grid grid={grid} setGrid={setGrid} />
			</div> */}

			
		</div>
	);
}