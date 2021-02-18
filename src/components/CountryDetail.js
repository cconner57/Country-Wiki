import React from 'react';
import { Link } from 'react-router-dom';
import { addCommas } from '../utils';

const CountryDetail = ({
	country,
	themeElement,
	themeText,
	themeBackground,
}) => {
	return (
		<div className='CountryDetail' style={{ backgroundColor: themeBackground }}>
			<img src={country.flag} alt={country.name} />
			<div className='Country'>
				<h1 style={{ color: themeText }}>{country.name}</h1>
				<div className='Details'>
					<div className='Column1'>
						<h3 style={{ color: themeText }}>
							Native Name: <span>{country.nativeName}</span>
						</h3>
						<h3 style={{ color: themeText }}>
							Population: <span>{addCommas(country.population)}</span>
						</h3>
						<h3 style={{ color: themeText }}>
							Region: <span>{country.region}</span>
						</h3>
						<h3 style={{ color: themeText }}>
							Sub Region: <span>{country.subregion}</span>
						</h3>
						<h3 style={{ color: themeText }}>
							Capital: <span>{country.capital}</span>
						</h3>
					</div>
					<div className='Column2'>
						<h3 style={{ color: themeText }}>
							Top Level Domain: <span>{country.topLevelDomain}</span>
						</h3>
						<h3 style={{ color: themeText }}>
							Currencies: <span>{country.currencies[0].name}</span>
						</h3>
						<h3 style={{ color: themeText }}>
							Languages:{' '}
							{country.languages.map((language, id) => (
								<span key={id} style={{ color: themeText }}>
									{language.name}
									{country.languages.length > 1 ? ', ' : ''}
								</span>
							))}
						</h3>
					</div>
				</div>
				{country.borders.length > 0 && (
					<div className='BorderCountries'>
						<h3 style={{ color: themeText }}>Border Countries: </h3>
						<div className='BorderList'>
							{country.borders.map((border, id) => (
								<Link to={border} key={id}>
									<p
										style={{ backgroundColor: themeElement, color: themeText }}>
										{border}
									</p>
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CountryDetail;
