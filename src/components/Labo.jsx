export const Labo = () => {
	//const local = window.localStorage;
	//local.clear();

	// const myObject = {
	// 	lastname: "Jaunay",
	// 	firstname: "Clément"
	// };

	// local.setItem("user", JSON.stringify(myObject));

	// var newObject = JSON.parse(local.getItem("user"));
	// console.log(newObject);
	//console.log(local.getItem("user"));

	return (
		<>
			<button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
				Button
			</button>
			<button className="btn">Button</button>

			<div className="flex justify-center gap-1 my-1 w-full">
				<kbd className="kbd">q</kbd>
				<kbd className="kbd">w</kbd>
				<kbd className="kbd">e</kbd>
				<kbd className="kbd">r</kbd>
				<kbd className="kbd">t</kbd>
				<kbd className="kbd">y</kbd>
				<kbd className="kbd">u</kbd>
				<kbd className="kbd">i</kbd>
				<kbd className="kbd">o</kbd>
				<kbd className="kbd">p</kbd>
			</div>
			<div className="flex justify-center gap-1 my-1 w-full">
				<kbd className="kbd">a</kbd>
				<kbd className="kbd">s</kbd>
				<kbd className="kbd">d</kbd>
				<kbd className="kbd">f</kbd>
				<kbd className="kbd">g</kbd>
				<kbd className="kbd">h</kbd>
				<kbd className="kbd">j</kbd>
				<kbd className="kbd">k</kbd>
				<kbd className="kbd">l</kbd>
			</div>
			<div className="flex justify-center gap-1 my-1 w-full">
				<kbd className="kbd">z</kbd>
				<kbd className="kbd">x</kbd>
				<kbd className="kbd">c</kbd>
				<kbd className="kbd">v</kbd>
				<kbd className="kbd">b</kbd>
				<kbd className="kbd">n</kbd>
				<kbd className="kbd">m</kbd>
				<kbd className="kbd">/</kbd>
			</div>

			<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
				<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span className="countdown font-mono text-5xl">
						<span style={{ "--value": 15 }}></span>
					</span>
					days
				</div>
				<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span className="countdown font-mono text-5xl">
						<span style={{ "--value": 10 }}></span>
					</span>
					hours
				</div>
				<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span className="countdown font-mono text-5xl">
						<span style={{ "--value": 24 }}></span>
					</span>
					min
				</div>
				<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span className="countdown font-mono text-5xl">
						<span style={{ "--value": 7 }}></span>
					</span>
					sec
				</div>
			</div>

			<div className="p-8 bg-amber-300">
				<div className="grid grid-cols-7 place-content-center gap-4">
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">1</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">2</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">3</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">4</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">5</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">6</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">7</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
					<div className="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
				</div>
			</div>
		</>
	);
};
