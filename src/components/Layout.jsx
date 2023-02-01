export const Layout = ({ children }) => {
	return (
		<>
			<div className={`left`}>{children}</div>
			<div className={`right`}></div>
		</>
	);
};
