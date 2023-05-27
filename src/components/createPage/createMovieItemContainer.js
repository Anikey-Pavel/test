import { createContent } from "./createContent";

export const createMovieItemContainer = (container) => {
	container = createContent();

	const contentMainBlockItems = document.createElement("div");

	contentMainBlockItems.classList.add("content-main-block__items");
	contentMainBlockItems.id = "moviesConteiner";

	container.append(contentMainBlockItems);

	return contentMainBlockItems
}