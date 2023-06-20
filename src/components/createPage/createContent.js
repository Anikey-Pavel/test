import {
	filterAll,
	filterComedy,
	filterCrime,
	filterDocumntary,
	filterHorror,
} from "../movies/sortMovie";

export const createContent = (container) => {
	const mainBlockContent = document.createElement("div");
	const contentMainBlockHeader = document.createElement("div");
	const contentMainBlockMenu = document.createElement("div");
	const menuList = document.createElement("ul");
	const menuItem1 = document.createElement("li");
	const menuItem2 = document.createElement("li");
	const menuItem3 = document.createElement("li");
	const menuItem4 = document.createElement("li");
	const menuItem5 = document.createElement("li");
	const sort = document.createElement("div");
	const sortText = document.createElement("div");
	const sortMenu = document.createElement("div");
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
	menuItem1.classList.add("menu__item");
	menuItem1.id = "All";

	menuItem1.addEventListener("click", filterAll);

	menuItem2.classList.add("menu__item");
	menuItem2.id = "Documentary";

	menuItem2.addEventListener("click", filterDocumntary);

	menuItem3.classList.add("menu__item");
	menuItem3.id = "Comedy";

	menuItem3.addEventListener("click", filterComedy);

	menuItem4.classList.add("menu__item");
	menuItem4.id = "Horror";

	menuItem4.addEventListener("click", filterHorror);

	menuItem5.classList.add("menu__item");
	menuItem5.id = "Crime";

	menuItem5.addEventListener("click", filterCrime);

	sort.classList.add("content-main-block__sort");
	sort.classList.add("sort");
	sortText.classList.add("sort__text");
	sortMenu.classList.add("sort__menu");
	contentMainBlockSubtitle.classList.add("content-main-block__subtitle");

	menuItem1.innerText = "All";
	menuItem2.innerText = "Documentary";
	menuItem3.innerText = "Comedy";
	menuItem4.innerText = "Horror";
	menuItem5.innerText = "Crime";
	sortText.innerText = "Sort by";
	sortMenu.innerText = "Release date";
	contentMainBlockSubtitle.append(moviesCountContainer, "movies found");

	container.append(mainBlockContent);
	mainBlockContent.append(contentMainBlockHeader);
	contentMainBlockHeader.append(contentMainBlockMenu);
	contentMainBlockMenu.append(menuList);
	menuList.append(menuItem1);
	menuList.append(menuItem2);
	menuList.append(menuItem3);
	menuList.append(menuItem4);
	menuList.append(menuItem5);
	contentMainBlockHeader.append(sort);
	sort.append(sortText);
	sort.append(sortMenu);
	mainBlockContent.append(contentMainBlockSubtitle);

	return mainBlockContent;
};
