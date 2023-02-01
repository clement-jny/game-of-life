export const Header = ({ counter }) => {
	return (
		<div>
			<h1 className={`title`}>Welcome to the Game Of Life</h1>
			<h2>Step: {counter}</h2>

			<h5>Made by Clément. J</h5>
		</div>
	);
};
