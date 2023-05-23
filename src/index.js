import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { addMovie, openList } from "./components/movies/addMovie";
import { createMovies } from "./components/movies/movies";
import "./style.scss";

const initApp = () => {
	const moviesContainer = document.querySelector(".main-block__content");
	createMovies();
	createMoreButton(moviesContainer);
	addMovie();
	openList();
};

initApp();
