import React, { useState } from 'react';
import NavBar from './components/NavBar';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeContext, colors } from './context/ThemeContext';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<Router>
			<ThemeContext.Provider value={colors}>
				<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
				<Route
					exact
					path='/'
					render={() => <HomeScreen darkMode={darkMode} />}
				/>
				<Route
					path='/:country'
					render={(routeProps) => (
						<DetailScreen {...routeProps} darkMode={darkMode} />
					)}
				/>
			</ThemeContext.Provider>
		</Router>
	);
}

export default App;
