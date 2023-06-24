import { updateMoviesState } from "../../api";
import { sortMovie } from "../movies/sortMovie";

export const createContent = (container) => {
	const mainBlockContent = document.createElement("div");
	const contentMainBlockHeader = document.createElement("form");
	const contentMainBlockMenu = document.createElement("div");
	const menuList = document.createElement("div");
	// const menuItem1Container = document.createElement("label");
	// const menuItem1 = document.createElement("input");
	const menuItem1 = document.createElement("div");
	const menuItem2Container = document.createElement("label");
	const menuItem2 = document.createElement("input");
	const menuItem3Container = document.createElement("label");
	const menuItem3 = document.createElement("input");
	const menuItem4Container = document.createElement("label");
	const menuItem4 = document.createElement("input");
	const menuItem5Container = document.createElement("label");
	const menuItem5 = document.createElement("input");
	const sort = document.createElement("div");
	const sortText = document.createElement("div");
	const sortMenu = document.createElement("select");
	const optionsRealeseDateMax = document.createElement("option");
	const optionsRealeseDateMin = document.createElement("option");
	const optionsRatingMax = document.createElement("option");
	const optionsRatingMin = document.createElement("option");
	const contentMainBlockSubtitle = document.createElement("div");
	const moviesCountContainer = document.createElement("span");

	moviesCountContainer.id = "moviesCounter";
	moviesCountContainer.innerText = "0";
	mainBlockContent.classList.add("main-block__content");
	mainBlockContent.classList.add("content-main-block");
	contentMainBlockHeader.classList.add("content-main-block__header");
	contentMainBlockMenu.classList.add("content-main-block__menu");
	contentMainBlockMenu.classList.add("menu");
	menuList.classList.add("menu__list");

	menuItem1.innerText = "All";
	menuItem1.classList.add("menu__item");
	menuItem1.id = "All";

	menuItem1.addEventListener("click", () => {
		const url = new URL(window.location.origin);
		window.history.pushState(null, "movie details", url.toString());
		updateMoviesState();
	});

	// menuItem1Container.innerText = "All";
	// menuItem1Container.classList.add("menu__item");
	// menuItem1Container.id = "All";
	// menuItem1.type = "checkbox";
	// menuItem1.name = "genre";
	// menuItem1.value = "All";

	contentMainBlockHeader.addEventListener("change", sortMovie);

	menuItem2Container.innerText = "Documentary";
	menuItem2Container.classList.add("menu__item");
	menuItem2Container.id = "Documentary";
	// menuItem2.classList.add("menu__item");
	// menuItem2.id = "Documentary";
	menuItem2.type = "checkbox";
	menuItem2.name = "genre";
	menuItem2.value = "Documentary";

	menuItem3Container.innerText = "Comedy";
	menuItem3Container.classList.add("menu__item");
	menuItem3Container.id = "Comedy";
	// menuItem3.classList.add("menu__item");
	// menuItem3.id = "Comedy";
	menuItem3.type = "checkbox";
	menuItem3.name = "genre";
	menuItem3.value = "Comedy";

	menuItem4Container.innerText = "Horror";
	menuItem4Container.classList.add("menu__item");
	menuItem4Container.id = "Horror";
	menuItem4.type = "checkbox";
	menuItem4.name = "genre";
	menuItem4.value = "Horror";

	menuItem5Container.innerText = "Crime";
	menuItem5Container.classList.add("menu__item");
	menuItem5Container.id = "Crime";
	// menuItem5.classList.add("menu__item");
	// menuItem5.id = "Crime";
	menuItem5.type = "checkbox";
	menuItem5.name = "genre";
	menuItem5.value = "Crime";

	sort.classList.add("content-main-block__sort");
	sort.classList.add("sort");
	sortText.classList.add("sort__text");
	sortMenu.classList.add("sort__menu");
	optionsRealeseDateMax.classList.add("sort__item", "release-date-max");
	optionsRealeseDateMax.setAttribute("data-order", "asc");
	optionsRealeseDateMin.classList.add("sort__item", "release-date-min");
	optionsRealeseDateMin.setAttribute("data-order", "desc");
	optionsRatingMax.classList.add("sort__item", "rating-max");
	optionsRatingMax.setAttribute("data-order", "asc");
	optionsRatingMin.classList.add("sort__item", "rating-min");
	optionsRatingMin.setAttribute("data-order", "desc");
	contentMainBlockSubtitle.classList.add("content-main-block__subtitle");

	menuItem1.innerText = "All";
	menuItem2.innerText = "Documentary";
	menuItem3.innerText = "Comedy";
	menuItem4.innerText = "Horror";
	menuItem5.innerText = "Crime";
	sortText.innerText = "Sort by";
	optionsRealeseDateMax.innerText = "Release date UP";
	optionsRealeseDateMax.value = "release_date";
	optionsRealeseDateMin.innerText = "Release date DOWN";
	optionsRealeseDateMin.value = "release_date";
	optionsRatingMax.innerText = "Raiting UP";
	optionsRatingMax.value = "vote_average";
	optionsRatingMin.innerText = "Raiting DOWN";
	optionsRatingMin.value = "vote_average";
	contentMainBlockSubtitle.append(moviesCountContainer, "movies found");

	container.append(mainBlockContent);
	mainBlockContent.append(contentMainBlockHeader);
	contentMainBlockHeader.append(contentMainBlockMenu);
	contentMainBlockMenu.append(menuList);
	menuList.append(menuItem1);
	// menuList.append(menuItem1Container);
	// menuItem1Container.append(menuItem1);
	menuList.append(menuItem2Container);
	menuItem2Container.append(menuItem2);
	menuList.append(menuItem3Container);
	menuItem3Container.append(menuItem3);
	menuList.append(menuItem4Container);
	menuItem4Container.append(menuItem4);
	menuList.append(menuItem5Container);
	menuItem5Container.append(menuItem5);
	contentMainBlockHeader.append(sort);
	sort.append(sortText);
	sort.append(sortMenu);
	sortMenu.append(optionsRealeseDateMax);
	sortMenu.append(optionsRealeseDateMin);
	sortMenu.append(optionsRatingMax);
	sortMenu.append(optionsRatingMin);
	mainBlockContent.append(contentMainBlockSubtitle);

	return mainBlockContent;
};
