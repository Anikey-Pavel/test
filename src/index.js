import { createAddMovie } from "./components/createPage/createAddMovie";
import { createFooter } from "./components/createPage/createFooter";
import { createHeader } from "./components/createPage/createHeader";
import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { addMovie, openList } from "./components/movies/addMovie";
import { createMovies } from "./components/movies/movies";
import { createConteiner } from "./components/createPage/createConteiner";
import { createContent } from "./components/createPage/createContent";
import { createMovieItemContainer } from "./components/createPage/createMovieItemContainer";
import { createMovieItem } from "./components/createPage/createMovieItem";
import "./style.scss";

const initApp = () => {


	createAddMovie();
	createConteiner();

	const conteinerPage = document.querySelector(".main-block._conteiner");

	createHeader(conteinerPage);
	createContent(conteinerPage);
	createFooter(conteinerPage);

	const containerForItems = document.querySelector(".main-block__content");

	createMovieItemContainer(containerForItems);

	const containerForMovies = document.querySelector(".content-main-block__items");

	createMovies(containerForMovies);
	createMovieItem(containerForMovies);

	const containerForButton = document.querySelector(".main-block__content");

	createMoreButton(containerForButton);

	addMovie();
	openList();
};

initApp();
