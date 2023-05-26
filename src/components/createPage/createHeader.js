export const createHeader = (conteiner) => {

	conteiner = document.querySelector("._conteiner");

	const header = document.createElement("header");
	const headerMainBlockTitle = document.createElement("div");
	const headerMainBlockLogo = document.createElement("div");
	const image = document.createElement("img");
	const headerMainBlockAddButton = document.createElement("div");
	const span = document.createElement("span");
	const headerMainBlockSearch = document.createElement("div");
	const headerMainBlockFind = document.createElement("div");
	const form = document.createElement("form");
	const input = document.createElement("input");
	const button = document.createElement("button");
	const headerMainBlockImage = document.createElement("div");
	const background = document.createElement("img");

	header.classList.add("main-block__header");
	header.classList.add("header-main-block");
	headerMainBlockTitle.classList.add("header-main-block__title");
	headerMainBlockLogo.classList.add("eader-main-block__logo");
	headerMainBlockAddButton.classList.add("header-main-block__add-button");
	headerMainBlockSearch.classList.add("header-main-block__search");
	headerMainBlockFind.classList.add("header-main-block__find");
	form.classList.add("header-main-block__form");
	input.classList.add("header-main-block__input");
	button.classList.add("header-main-block__button");
	headerMainBlockImage.classList.add("header-main-block__image");

	image.src = "./img/icons/logo.svg";
	image.alt = "icon";
	span.innerText = "+ ADD MOVIE";
	headerMainBlockFind.innerText = "FIND YOUR MOVIE";
	form.method = "get";
	input.placeholder = "What do you want to watch?";
	input.type = "text";
	button.innerText = "Search";
	background.src = "./img/icons/Bitmap.png"
	background.alt = "background";

	conteiner.append(header);
	header.append(headerMainBlockTitle);
	headerMainBlockTitle.append(headerMainBlockLogo);
	headerMainBlockLogo.append(image);
	headerMainBlockTitle.append(headerMainBlockAddButton);
	headerMainBlockAddButton.append(span);
	header.append(headerMainBlockSearch);
	headerMainBlockSearch.append(headerMainBlockFind);
	headerMainBlockSearch.append(form);
	form.append(input);
	form.append(button);
	header.append(headerMainBlockImage);
	headerMainBlockImage.append(background);
}

