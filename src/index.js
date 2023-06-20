import { createAddMovie } from "./components/createPage/createAddMovie";
import { createConteiner } from "./components/createPage/createConteiner";
import { createContent } from "./components/createPage/createContent";
import { createDeleteMovie } from "./components/createPage/createDeleteMovie";
import { createFooter } from "./components/createPage/createFooter";
import { createMovieItemContainer } from "./components/createPage/createMovieItemContainer";
import { renderTopPage } from "./components/createPage/createTopPage";
import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { addMovie, openList } from "./components/movies/addMovie";
import { deleteMovieCard } from "./components/movies/deleteMovie";
import { createMovies } from "./components/movies/movies";
import { sortByGenreMovie } from "./components/movies/sortMovie";
import "./style/style.scss";

const initApp = () => {
	createDeleteMovie();
	createAddMovie();

	const conteinerPage = createConteiner();

	const headerContainer = document.createElement("div");
	headerContainer.classList.add("headerOrDetails");
	conteinerPage.append(headerContainer);

	renderTopPage(headerContainer);

	const containerForItems = createContent(conteinerPage);
	const containerForMovies = createMovieItemContainer(containerForItems);

	createMovies(containerForMovies);
	createMoreButton(containerForItems);

	addMovie();
	openList();
	deleteMovieCard();

	createFooter(conteinerPage);
};

initApp();
