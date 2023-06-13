import { createMovieDetails } from "../movieDetails/index";
import { createHeader } from "./createHeader";

export const renderTopPage = (container) => {
	const { pathname } = window.location;
	const movieDetailsRgex = /\/movie/i;

	container.textContent = "";

	if (movieDetailsRgex.test(pathname)) {
		createMovieDetails(container);
	} else createHeader(container);
};
