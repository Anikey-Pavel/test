import { deleteMovie, updateMoviesState } from "../../api";
import { goToMovieDetails } from "../../utils/search";
import { renderTopPage } from "../createPage/createTopPage";

export const createMovies = (container) => {
	const clickHandler = (e) => {
		const id = e.target.closest("[data-id]")?.dataset.id;

		if (id && e.target.tagName === "IMG") {
			goToMovieDetails(id);
			const headerContainer = document.querySelector(".headerOrDetails");
			renderTopPage(headerContainer);
		} else if (id && e.target.id === "delete") {
			const confirm = document.querySelector("#confirm");

			confirm.addEventListener("click", () => {
				deleteMovie(id);
			});
		}
	};

	container.addEventListener("click", clickHandler);
	updateMoviesState();
};
