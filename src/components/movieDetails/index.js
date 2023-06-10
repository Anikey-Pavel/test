import { getMovie } from "../../api";
import { searcToObject } from "../../utils/search";

export const createMovieDetails = (container) => {
	const { id } = searcToObject(window.location.search);
	getMovie(id).then((data) => {
		container.textContent = data.title;
	});
};
