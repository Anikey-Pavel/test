import { createAddMovie } from "./components/createPage/createAddMovie";
// import { createConteiner } from "./components/createPage/createConteiner";
import { createContent } from "./components/createPage/createContent";
import { createFooter } from "./components/createPage/createFooter";
import { createHeader } from "./components/createPage/createHeader";
import { createMovieItem } from "./components/createPage/createMovieItem";
import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { addMovie, openList } from "./components/movies/addMovie";
import { createMovies } from "./components/movies/movies";
import "./style.scss";

const initApp = () => {
	const conteinerPage = document.querySelector(".main-block _conteiner");

	// createConteiner();
	createHeader(conteinerPage);
	createContent(conteinerPage);
	createFooter(conteinerPage);
	createAddMovie();
	createMovieItem();

	createMovies();
	createMoreButton();

	addMovie();
	openList();
};

initApp();
