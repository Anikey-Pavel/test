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
	const conteinerPage = createConteiner();
	createHeader(conteinerPage);
	const containerForItems = createContent(conteinerPage);
	createFooter(conteinerPage);
	const containerForMovies = createMovieItemContainer(containerForItems);
	createMovies(containerForMovies);
	createMovieItem(containerForMovies);
	createMoreButton(containerForItems);
	addMovie();
	openList();
};

initApp();
