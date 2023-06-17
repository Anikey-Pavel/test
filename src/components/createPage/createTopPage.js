import { createMovieDetails } from "../movieDetails/index";
import { createHeader } from "./createHeader";

export const renderTopPage = (container = undefined) => {
	const realContainer = container || document.querySelector(".headerOrDetails");
	const { pathname } = window.location;
	const movieDetailsRgex = /\/movie/i;

	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});

	realContainer.textContent = "";

	if (movieDetailsRgex.test(pathname)) {
		createMovieDetails(realContainer);
	} else createHeader(realContainer);
};
