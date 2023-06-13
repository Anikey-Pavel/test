export const parseDate = (data) => {
	const parsed = data.split("-");
	return {
		year: parsed[0],
		month: [1],
		day: [2],
	};
};

export const parseTime = (mins) => {
	const hours = Math.trunc(mins / 60);
	const minutes = mins % 60;
	return `${hours ? `${hours}h ` : ""}${minutes ? `${minutes}min` : ""}`;
};
