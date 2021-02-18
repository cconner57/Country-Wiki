import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { addCommas } from '../utils';

const CountryItem = ({
	image,
	name,
	population,
	region,
	capital,
	darkMode,
}) => {
	const color = useContext(ThemeContext);
	const themeText = darkMode ? color.dark.text : color.light.text;
	const themeElement = darkMode ? color.dark.element : color.light.element;

	return (
		<div className='CountryItem' style={{ backgroundColor: themeElement }}>
			<img src={image} alt={name} />
			<h1 style={{ color: themeText }}>{name}</h1>
			<h2 style={{ color: themeText }}>
				Population: <span>{addCommas(population)}</span>
			</h2>
			<h2 style={{ color: themeText }}>
				Region: <span>{region}</span>
			</h2>
			<h2 style={{ color: themeText }}>
				Capital: <span>{capital}</span>
			</h2>
		</div>
	);
};

export default CountryItem;
