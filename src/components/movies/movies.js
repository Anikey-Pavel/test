import { getMovies } from "../../api";
import { parseDate } from "../../utils/date";
import { searcToObject } from "../../utils/search";
import { createMovieItem } from "../createPage/createMovieItem";
import { createMovieItemContainer } from "../createPage/createMovieItemContainer";

const container = createMovieItemContainer();

const defaultPoster =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsw4j6TBoBT9tGANsMBQNeb70zfEVpJ9DkQ&usqp=CAU";
const createMovie = (movie) => {
	const movieElement = createMovieItem();

	movieElement.querySelector("img").src = movie.poster_path;
	movieElement.querySelector("img").onerror = (e) => {
		e.target.src = defaultPoster;
	};

	movieElement.querySelector(".item__title").textContent = movie.title;
	movieElement.querySelector(".item__category").textContent =
		movie.genres.toString();
	movieElement.querySelector(".item__date").textContent = parseDate(
		movie.release_date
	).year;

	return movieElement;
};

export const createMovies = () => {
	const params = window.location.search;
	getMovies().then((data) => {
		const movies = data.data;
		const moviesElemenets = movies.map(createMovie);

		container.append(...moviesElemenets);
	});
};
