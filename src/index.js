import { createConteiner } from "./components/createPage/createConteiner";
import { createHeader } from "./components/createPage/createHeader";
import { createContent } from "./components/createPage/createContent";
import { createFooter } from "./components/createPage/createFooter";
import { createAddMovie } from "./components/createPage/createAddMovie";
import { createMovieItem } from "./components/createPage/createMovieItem";
import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { addMovie, openList } from "./components/movies/addMovie";
import { createMovies } from "./components/movies/movies";
import "./style.scss";




const initApp = () => {
	const conteinerPage = document.querySelector(".main-block _conteiner");

	createHeader(conteinerPage);
	createFooter(conteinerPage);
	createAddMovie();
	createMovies();
	createMoreButton();
	addMovie();
	openList();
};

initApp();