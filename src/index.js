import { createAddMovie } from "./components/createPage/createAddMovie";
import { createConteiner } from "./components/createPage/createConteiner";
import { createContent } from "./components/createPage/createContent";
import { createDeleteMovie } from "./components/createPage/createDeleteMovie";
import { createMovieEdit } from "./components/createPage/createEditMovie";
import { createFooter } from "./components/createPage/createFooter";
import { createHeader } from "./components/createPage/createHeader";
import { createMovieItemContainer } from "./components/createPage/createMovieItemContainer";
import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { createMovieDetails } from "./components/movieDetails";
import { addMovie, openList } from "./components/movies/addMovie";
import { deleteMovieCard } from "./components/movies/deleteMovie";
import { editMovie } from "./components/movies/editMovie";
import { createMovies } from "./components/movies/movies";

import "./style.scss";

const renderHomePage = (container) => {
	createHeader(container);

	const containerForItems = createContent(container);
	const containerForMovies = createMovieItemContainer(containerForItems);

	createMovies(containerForMovies);
	createMoreButton(containerForItems);

	addMovie();
	openList();
	deleteMovieCard();
	editMovie();
};

const initApp = () => {
	createMovieEdit();
	createDeleteMovie();
	createAddMovie();

	const { pathName } = window;
	const movieDetailsRgex = /\/movies\//i;

	const conteinerPage = createConteiner();

	if (movieDetailsRgex.test(pathName)) {
		createMovieDetails(conteinerPage);
	} else renderHomePage(conteinerPage);

	createFooter(conteinerPage);
};

initApp();

