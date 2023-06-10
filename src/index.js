import { createAddMovie } from "./components/createPage/createAddMovie";
import { createConteiner } from "./components/createPage/createConteiner";
import { createContent } from "./components/createPage/createContent";
import { createDeleteMovie } from "./components/createPage/createDeleteMovie";
import { createFooter } from "./components/createPage/createFooter";
import { createHeader } from "./components/createPage/createHeader";
import { createMovieItemContainer } from "./components/createPage/createMovieItemContainer";
import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { addMovie, openList } from "./components/movies/addMovie";
import { deleteMovieCard } from "./components/movies/deleteMovie";
import { createMovies } from "./components/movies/movies";

import "./style.scss";

const renderHomePage = (container) => {};

const initApp = () => {
	createDeleteMovie();
	createAddMovie();

	const { pathname } = window.location;
	const movieDetailsRgex = /\/movie/i;

	const conteinerPage = createConteiner();
	const containerForItems = createContent(conteinerPage);
	const containerForMovies = createMovieItemContainer(containerForItems);
	// if (movieDetailsRgex.test(pathname)) {
	// 	createMovieDetails(conteinerPage);
	// } else renderHomePage(conteinerPage);

	createHeader(conteinerPage);
	createMovies(containerForMovies);
	createMoreButton(containerForItems);

	addMovie();
	openList();
	deleteMovieCard();

	createFooter(conteinerPage);
};

initApp();
