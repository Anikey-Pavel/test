// import defaultImage from
import { getMovies } from "../../api";
import { parseDate } from "../../utils/date";
import { searcToObject } from "../../utils/search";

// const container = document.getElementById("moviesConteiner");
const container = document.getElementsByClassName("content-main-block__items");
// console.log(container);
// const template = document.getElementById("movie-item");
const template = document.getElementsByTagName("template");
// console.log(template)
const defaultPoster =
	"https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg";
const createMovie = (movie) => {
	const movieElement = template.content.cloneNode(true);

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
