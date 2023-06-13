import { deleteMovie, updateMoviesState } from "../../api";
import { goToMovieDetails } from "../../utils/search";
import { renderTopPage } from "../createPage/createTopPage";

export const createMovies = (container) => {
	const clickHandler = (e) => {
		const movieCard = e.target.closest("[data-id]");

		if (movieCard) {
			const { id } = movieCard.dataset;

			goToMovieDetails(id);
			const headerContainer = document.querySelector(".headerOrDetails");
			renderTopPage(headerContainer);
			const confirm = document.querySelector("#confirm");

			confirm.addEventListener("click", () => {
				deleteMovie(id);
			});
		}
	};

	container.addEventListener("click", clickHandler);
	updateMoviesState();
};
