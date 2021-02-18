import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';
import CountryItem from '../components/CountryItem';

const HomeScreen = ({ darkMode }) => {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState(null);

	const color = useContext(ThemeContext);

	useEffect(() => {
		(async () => {
			try {
				await fetch('https://restcountries.eu/rest/v2/all')
					.then((response) => response.json())
					.then((data) => {
						setCountries(data);
					});
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const searchHandler = (e) => {
		setSearch(e.target.value.toLowerCase());
	};

	const filterHandler = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div
			className='HomeScreen'
			style={{
				backgroundColor: darkMode
					? color.dark.background
					: color.light.background,
			}}>
			<div className='Header'>
				<SearchBar searchHandler={searchHandler} darkMode={darkMode} />
				<Filter filterHandler={filterHandler} darkMode={darkMode} />
			</div>
			<div className='Main'>
				{filter
					? countries
							.filter((country) =>
								country.region.toLowerCase().includes(filter)
							)
							.map((country, id) => (
								<Link to={country.alpha3Code} key={id}>
									<CountryItem
										image={country.flag}
										name={country.name}
										population={country.population}
										region={country.region}
										capital={country.capital}
										darkMode={darkMode}
									/>
								</Link>
							))
					: countries
							.filter((country) => country.name.toLowerCase().includes(search))
							.map((country, id) => (
								<Link to={country.alpha3Code} key={id}>
									<CountryItem
										image={country.flag}
										name={country.name}
										population={country.population}
										region={country.region}
										capital={country.capital}
										darkMode={darkMode}
									/>
								</Link>
							))}
			</div>
		</div>
	);
};

export default HomeScreen;
