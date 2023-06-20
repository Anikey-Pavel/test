import { getMovie } from "../../api";
import { searcToObject } from "../../utils/search";
import { createDetails } from "../createPage/createDetails";

export const createMovieDetails = (container) => {
	const { id } = searcToObject(window.location.search);
	const detailsBlock = document.createElement("header");
	container.append(detailsBlock);
	getMovie(id).then((data) => {
		createDetails(detailsBlock, data);
	});
};
