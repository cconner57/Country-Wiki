import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Filter = ({ filterHandler, darkMode }) => {
	const color = useContext(ThemeContext);

	return (
		<div
			className='Filter'
			style={{
				backgroundColor: darkMode ? color.dark.element : color.light.element,
			}}>
			<select
				defaultValue='none'
				style={{
					backgroundColor: darkMode ? color.dark.element : color.light.element,
					color: darkMode ? color.dark.text : color.light.text,
				}}
				onChange={filterHandler}>
				<option disabled value='none'>
					Filter by Region
				</option>
				<option value='africa'>Africa</option>
				<option value='america'>America</option>
				<option value='asia'>Asia</option>
				<option value='europe'>Europe</option>
				<option value='oceania'>Oceania</option>
			</select>
		</div>
	);
};

export default Filter;
