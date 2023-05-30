import { defaultLimit, updateMoviesState } from "../../api";
import { getSearchParams } from "../../utils/search";
import { createMovieCard } from "../movies/movies";

export const createMoreButton = (container) => {
	container = document.querySelector(".main-block__content");
	const button = document.createElement("button");
	button.type = "button";
	button.id = "showMore";
	button.innerText = "Show more";

	const onClick = () =>{
	const currentLimit = getSearchParams()?.limit || defaultLimit;
		updateMoviesState({ limit:currentLimit + defaultLimit}).then((data) => {
			console.log(data)
				const movies = data.data;
				const moviesElemenets = movies.map(createMovieCard);
		
				const moviesContainer = document.querySelector("#moviesConteiner");
				moviesContainer.innerHTML = "";
				moviesContainer.append(...moviesElemenets);
		});
	};

	button.addEventListener("click", onClick);
	container.append(button);
};
