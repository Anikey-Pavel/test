import { updateMoviesState } from "../../api";
import { goToMovieDetails } from "../../utils/search";
import { deleteMovie } from "../../api";

export const createMovies = (container) => {
	const clickHandler = (e) => {
		const movieCard = e.target.closest("[data-id]");

		if (movieCard) {
			const { id } = movieCard.dataset;

			goToMovieDetails(id);

			const confirm = document.querySelector("#confirm");

			confirm.addEventListener("click", () => {
				deleteMovie(id);
			});

		}
	};

	container.addEventListener("click", clickHandler);
	updateMoviesState();
};
