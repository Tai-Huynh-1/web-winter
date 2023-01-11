/**
 * A reusable button with default styles and the ability to extend and modify styles. Proxy pattern.
 * @param {*} param0 children, classname, secondary, and other props
 * @returns Button component.
 */
const Button = ({ children, className = "", secondary, ...props }) => {
	const styles = `${secondary ? "rounded-md border-2 border-indigo-500 py-2 px-3" : "rounded-md border-2 border-transparent bg-indigo-500 text-white py-2 px-3"} ${className}`;

	return (
		<button type="button" className={styles} {...props}>
			{children}
		</button>
	);
};

export default Button;
