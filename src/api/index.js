import { createWindowCongratulations } from "../components/createPage/createCongratulations";
import { createMovieItem } from "../components/createPage/createMovieItem";
import { getSearchParams, objectToSearch, updateSearchParams, } from "../utils/search";

export const movieList = {};

const baseUrl = "http://localhost:4000/movies";

export const defaultLimit = 10;

const defaultParams = {
	limit: defaultLimit,
	filter: undefined,
	search: undefined,
	sortBy: undefined,
	sortOrder: "desc",
};

export const getMovies = (params) =>
	fetch(`${baseUrl}${objectToSearch(params || defaultParams)}`).then((data) =>
		data.json()
	);

export const updateMoviesState = (params) => {
	if (params) updateSearchParams(params);
	const currentParams = getSearchParams() || defaultParams;
	return getMovies(currentParams).then((data) => {
		data.data.forEach((movie) => {
			movieList[movie.id] = movie;
		});
		const moviesElemenets = Object.values(movieList).map(createMovieItem);

		const moviesContainer = document.querySelector("#moviesConteiner");
		moviesContainer.innerHTML = "";
		moviesContainer.append(...moviesElemenets);

		const moviesCountContainer = document.querySelector("#moviesCounter");
		if (moviesCountContainer) {
			moviesCountContainer.textContent = data.totalAmount;
		}

		const showMoreButton = document.querySelector("#showMore");

		if (data.totalAmount <= (currentParams.limit || defaultLimit)) {
			showMoreButton.classList.add("hidden");
		} else {
			showMoreButton.classList.remove("hidden");
		}
	});
};

export const createMovie = (body) =>
	fetch(baseUrl, {
		method: "POST",
		body,
	}).then((data) => {
		updateMoviesState();
		return data.json();
	});

export const updateMovie = (body) =>
	fetch(baseUrl, {
		method: "PUT",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((data) => {
		updateMoviesState();
		return data.json();
	});

export const getMovie = (id) =>
	fetch(`${baseUrl}/${id}`).then((data) => data.json());

export const deleteMovie = (id) => {
	fetch(`${baseUrl}/${id}`, {
		method: "DELETE",
	}).then(() => {
		updateMoviesState();
		createWindowCongratulations();
	});
};