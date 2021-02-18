import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const NavBar = ({ darkMode, setDarkMode }) => {
	const color = useContext(ThemeContext);

	return (
		<div
			className='NavBar'
			style={{
				backgroundColor: darkMode ? color.dark.element : color.light.element,
			}}>
			<Link to='/'>
				<h1
					style={{
						color: darkMode ? color.dark.text : color.light.text,
					}}>
					Where in the world?
				</h1>
			</Link>
			<button
				style={{
					color: darkMode ? color.dark.text : color.light.text,
				}}
				onClick={() => setDarkMode(!darkMode)}>
				{darkMode ? (
					<i className='fas fa-moon' />
				) : (
					<i className='far fa-moon' />
				)}
				Dark Mode
			</button>
		</div>
	);
};

export default NavBar;
