import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SearchBar = ({ searchHandler, darkMode }) => {
	const color = useContext(ThemeContext);
	const theme = darkMode ? color.dark.element : color.light.element;

	return (
		<div
			className='SearchBar'
			style={{
				backgroundColor: theme,
			}}>
			<i
				className='fas fa-search'
				style={{
					color: darkMode ? color.dark.text : color.light.text,
				}}
			/>
			<input
				type='text'
				placeholder='Search for a country...'
				style={{
					backgroundColor: theme,
				}}
				onChange={searchHandler}
			/>
		</div>
	);
};

export default SearchBar;
