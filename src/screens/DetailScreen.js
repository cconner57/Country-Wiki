import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import CountryDetail from '../components/CountryDetail';

const DetailScreen = ({ history, match, darkMode }) => {
	const [country, setCountry] = useState('');

	const color = useContext(ThemeContext);
	const themeText = darkMode ? color.dark.text : color.light.text;
	const themeElement = darkMode ? color.dark.element : color.light.element;
	const themeBackground = darkMode
		? color.dark.background
		: color.light.background;

	useEffect(() => {
		(() => {
			try {
				fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.country}`)
					.then((response) => response.json())
					.then((data) => setCountry(data));
			} catch (error) {
				console.log(error);
			}
		})();
	}, [match.params.country]);

	return (
		<div className='DetailScreen' style={{ backgroundColor: themeBackground }}>
			<div
				className='BackButton'
				style={{ backgroundColor: themeElement, color: themeText }}
				onClick={() => history.goBack()}>
				<i className='fas fa-arrow-left' /> <h2>Back</h2>
			</div>
			{country && (
				<CountryDetail
					country={country}
					themeText={themeText}
					themeElement={themeElement}
					themeBackground={themeBackground}
				/>
			)}
		</div>
	);
};

export default DetailScreen;
