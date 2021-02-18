export const addCommas = (x) => {
	if (x) {
		return x.toLocaleString('en-US', { minimumFractionDigits: 0 });
	}
};
