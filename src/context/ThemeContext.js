import React from 'react';

export const colors = {
	dark: {
		element: 'hsl(209, 23%, 22%)',
		background: 'hsl(207,26%, 17%)',
		text: 'hsl(0,0%,100%)',
	},
	light: {
		element: 'hsl(0, 0%, 100%)',
		background: 'hsl(0,0%, 98%)',
		text: 'hsl(200,15%,8%)',
		input: 'hsl(0,0%,52%)',
	},
};


export const ThemeContext = React.createContext();
