import { movieList, updateMovie } from "../../api";

export const createMovieEdit = () => {
	const addMovie = document.createElement("form");
	const addMovieBody = document.createElement("div");
	const addMovieContent = document.createElement("div");
	const contentAddMovieClose = document.createElement("a");
	const contentAddMovieConteiner = document.createElement("div");
	const contentAddMovieHeader = document.createElement("div");
	const contentAddMovieTitle = document.createElement("div");
	const description = document.createElement("div");
	const descriptionBlock = document.createElement("div");
	const descriptionHeader = document.createElement("div");
	const descriptionElem = document.createElement("input");
	const descriptionBlockDate = document.createElement("div");
	const descriptionHeaderDate = document.createElement("div");
	const descriptionElemDate = document.createElement("input");
	const descriptionBlockUrl = document.createElement("div");
	const descriptionHeaderUrl = document.createElement("div");
	const descriptionElemUrl = document.createElement("input");
	const descriptionBlockRating = document.createElement("div");
	const descriptionHeaderRating = document.createElement("div");
	const descriptionElemRating = document.createElement("input");
	const descriptionBlockGenre = document.createElement("div");
	const descriptionHeaderGenre = document.createElement("div");
	const descriptionMenu = document.createElement("div");
	const menuDescriptionTitle = document.createElement("div");
	const menuDescriptionArrow = document.createElement("span");
	const menuDescriptionList = document.createElement("ul");
	const menuDescriptionItem = document.createElement("li");
	const menuDescriptionCheckCrime = document.createElement("input");
	const labelCrime = document.createElement("label");
	const menuDescriptionItemDocumentary = document.createElement("li");
	const menuDescriptionCheckDocumentary = document.createElement("input");
	const labelDocumentary = document.createElement("label");
	const menuDescriptionItemHorror = document.createElement("li");
	const menuDescriptionCheckHorror = document.createElement("input");
	const labelHorror = document.createElement("label");
	const menuDescriptionItemComedy = document.createElement("li");
	const menuDescriptionCheckComedy = document.createElement("input");
	const labelComedy = document.createElement("label");
	const descriptionBlockRuntime = document.createElement("div");
	const descriptionHeaderRuntime = document.createElement("div");
	const descriptionElemRuntime = document.createElement("input");
	const overview = document.createElement("div");
	const overviewTitle = document.createElement("div");
	const overviewDescription = document.createElement("textarea");
	const contentAddMovieFooter = document.createElement("div");
	const buttonBlock = document.createElement("div");
	const buttonReset = document.createElement("button");
	const buttonSubmit = document.createElement("button");

	addMovie.classList.add("edit-movie");
	addMovie.id = "edit-movie";
	addMovieBody.classList.add("edit-movie__body");
	addMovieContent.classList.add("edit-movie__content");
	addMovieContent.classList.add("content-edit-movie");
	contentAddMovieClose.classList.add("content-edit-movie__close");
	contentAddMovieConteiner.classList.add("content-edit-movie__conteiner");
	contentAddMovieHeader.classList.add("content-edit-movie__header");
	contentAddMovieTitle.classList.add("content-edit-movie__title");
	description.classList.add("content-edit-movie__description");
	description.classList.add("description");
	descriptionBlock.classList.add("description__block");
	descriptionHeader.classList.add("description__header");
	descriptionElem.classList.add("description__elem");
	descriptionElem.classList.add("_title");
	descriptionBlockDate.classList.add("description__block");
	descriptionHeaderDate.classList.add("description__header");
	descriptionElemDate.classList.add("description__elem");
	descriptionElemDate.classList.add("_date");
	descriptionBlockUrl.classList.add("description__block");
	descriptionHeaderUrl.classList.add("description__header");
	descriptionElemUrl.classList.add("description__elem");
	descriptionElemUrl.classList.add("_url");
	descriptionBlockRating.classList.add("description__block");
	descriptionHeaderRating.classList.add("description__header");
	descriptionElemRating.classList.add("description__elem");
	descriptionElemRating.classList.add("_rating");
	descriptionBlockGenre.classList.add("description__block");
	descriptionHeaderGenre.classList.add("description__header");
	descriptionMenu.classList.add("description__menu");
	descriptionMenu.classList.add("menu-description");
	menuDescriptionTitle.classList.add("menu-description__title");
	menuDescriptionArrow.classList.add("menu-description__arrow");
	menuDescriptionList.classList.add("menu-description__list");
	menuDescriptionItem.classList.add("menu-description__item");
	menuDescriptionCheckCrime.classList.add("menu-description__check");
	menuDescriptionCheckCrime.id = "crime";
	labelCrime.classList.add("menu-description__label");
	menuDescriptionItemDocumentary.classList.add("menu-description__item");
	menuDescriptionCheckDocumentary.classList.add("menu-description__check");
	menuDescriptionCheckDocumentary.id = "documentary";
	labelDocumentary.classList.add("menu-description__label");
	menuDescriptionItemHorror.classList.add("menu-description__item");
	menuDescriptionCheckHorror.classList.add("menu-description__check");
	menuDescriptionCheckHorror.id = "horror";
	labelHorror.classList.add("menu-description__label");
	menuDescriptionItemComedy.classList.add("menu-description__item");
	menuDescriptionCheckComedy.classList.add("menu-description__check");
	menuDescriptionCheckComedy.id = "comedy";
	labelComedy.classList.add("menu-description__label");
	descriptionBlockRuntime.classList.add("description__block");
	descriptionHeaderRuntime.classList.add("description__header");
	descriptionElemRuntime.classList.add("description__elem");
	descriptionElemRuntime.classList.add("_runtime");
	overview.classList.add("content-edit-movie__overview");
	overview.classList.add("overview");
	overviewTitle.classList.add("overview__title");
	overviewDescription.classList.add("overview__description");
	contentAddMovieFooter.classList.add("content-edit-movie__footer");
	buttonBlock.classList.add("content-add-movie__button-block");
	buttonBlock.classList.add("button-block");
	buttonReset.classList.add("button-block__button");
	buttonReset.classList.add("_reset");
	buttonSubmit.classList.add("button-block__button");
	buttonSubmit.classList.add("_submit");

	contentAddMovieHeader.innerText = "EDIT MOVIE";
	contentAddMovieClose.innerText = "X";
	descriptionHeader.innerText = "title";
	descriptionElem.type = "text";
	descriptionElem.value = "";
	descriptionElem.name = "title";
	descriptionHeaderDate.innerText = "date";
	descriptionElemDate.type = "date";
	descriptionElemDate.name = "date";
	descriptionHeaderUrl.innerText = "url";
	descriptionElemUrl.type = "text";
	descriptionElemUrl.name = "url";
	descriptionElemUrl.placeholder = "https://";
	descriptionHeaderRating.innerText = "rating";
	descriptionElemRating.placeholder = "7.8";
	descriptionElemRating.name = "rating";
	descriptionHeaderGenre.innerText = "genre";
	menuDescriptionTitle.innerText = "Select Genre";
	menuDescriptionCheckCrime.type = "checkbox";
	labelCrime.setAttribute("for", menuDescriptionCheckCrime.id);
	labelCrime.innerText = "Crime";
	menuDescriptionCheckDocumentary.type = "checkbox";
	labelDocumentary.setAttribute("for", menuDescriptionCheckDocumentary.id);
	labelDocumentary.innerText = "Documentary";
	menuDescriptionCheckHorror.type = "checkbox";
	labelHorror.setAttribute("for", menuDescriptionCheckHorror.id);
	labelHorror.innerText = "Horror";
	menuDescriptionCheckComedy.type = "checkbox";
	labelComedy.setAttribute("for", menuDescriptionCheckComedy.id);
	labelComedy.innerText = "Comedy";
	descriptionHeaderRuntime.innerText = "runtime";
	descriptionElemRuntime.placeholder = "minutes";
	descriptionElemRuntime.name = "minutes";
	overviewTitle.innerText = "OVERVIEW";
	overviewDescription.placeholder = "Movie description";
	overviewDescription.name = "overview";
	buttonReset.innerText = "RESET";
	buttonReset.type = "reset";
	buttonSubmit.innerText = "SUBMIT";
	buttonSubmit.type = "submit";

	document.body.append(addMovie);
	addMovie.append(addMovieBody);
	addMovieBody.append(addMovieContent);
	addMovieContent.append(contentAddMovieClose);
	addMovieContent.append(contentAddMovieConteiner);
	contentAddMovieConteiner.append(contentAddMovieHeader);
	contentAddMovieHeader.append(contentAddMovieTitle);
	contentAddMovieConteiner.append(description);
	description.append(descriptionBlock);
	descriptionBlock.append(descriptionHeader);
	descriptionBlock.append(descriptionElem);
	description.append(descriptionBlockDate);
	descriptionBlockDate.append(descriptionHeaderDate);
	descriptionBlockDate.append(descriptionElemDate);
	description.append(descriptionBlockUrl);
	descriptionBlockUrl.append(descriptionHeaderUrl);
	descriptionBlockUrl.append(descriptionElemUrl);
	description.append(descriptionBlockRating);
	descriptionBlockRating.append(descriptionHeaderRating);
	descriptionBlockRating.append(descriptionElemRating);
	description.append(descriptionBlockGenre);
	descriptionBlockGenre.append(descriptionHeaderGenre);
	descriptionBlockGenre.append(descriptionMenu);
	descriptionMenu.append(menuDescriptionTitle);
	descriptionMenu.append(menuDescriptionArrow);
	descriptionMenu.append(menuDescriptionList);
	menuDescriptionList.append(menuDescriptionItem);
	menuDescriptionItem.append(menuDescriptionCheckCrime);
	menuDescriptionItem.append(labelCrime);
	menuDescriptionList.append(menuDescriptionItemDocumentary);
	menuDescriptionItemDocumentary.append(menuDescriptionCheckDocumentary);
	menuDescriptionItemDocumentary.append(labelDocumentary);
	menuDescriptionList.append(menuDescriptionItemHorror);
	menuDescriptionItemHorror.append(menuDescriptionCheckHorror);
	menuDescriptionItemHorror.append(labelHorror);
	menuDescriptionList.append(menuDescriptionItemComedy);
	menuDescriptionItemComedy.append(menuDescriptionCheckComedy);
	menuDescriptionItemComedy.append(labelComedy);
	description.append(descriptionBlockRuntime);
	descriptionBlockRuntime.append(descriptionHeaderRuntime);
	descriptionBlockRuntime.append(descriptionElemRuntime);
	contentAddMovieConteiner.append(overview);
	overview.append(overviewTitle);
	overview.append(overviewDescription);
	contentAddMovieConteiner.append(contentAddMovieFooter);
	contentAddMovieFooter.append(buttonBlock);
	buttonBlock.append(buttonReset);
	buttonBlock.append(buttonSubmit);

	const editMovie = () => {
		const items = document.querySelector(".content-main-block__items");
		const editBlock = document.querySelector(".edit-movie");
		const buttonClose = document.querySelector(".content-edit-movie__close");
		const blockContent = document.querySelector(".edit-movie__body");

		items.addEventListener("click", (event) => {
			if (event.target.id !== "edit") return;
			editBlock.classList.add("open");
			document.body.classList.add("lock");
		});

		const movieCard = event.target.closest("[data-id]");
		const id = movieCard.getAttribute("data-id");
		const currentMovie = movieList[id];

		items.addEventListener("click", (event) => {
			if (event.target.id !== "edit") return;

			descriptionElem.value = currentMovie.title;
			descriptionElemDate.value = currentMovie.release_date;
			descriptionElemUrl.value = currentMovie.poster_path;
			descriptionElemRating.value = currentMovie.vote_average;
			descriptionElemRuntime.value = currentMovie.runtime;
			overviewDescription.value = currentMovie.overview;
		});

		editBlock.addEventListener("submit", (e) => {
			e.preventDefault();
			const form = new FormData(editBlock);

			currentMovie.title = form.get("title");
			currentMovie.release_date = form.get("date");
			currentMovie.poster_path = form.get("url");
			currentMovie.vote_average = +form.get("rating");
			currentMovie.runtime = +form.get("minutes");
			currentMovie.overview = form.get("overview");

			updateMovie(currentMovie);
		});

		buttonClose.addEventListener("click", () => {
			document.body.remove(addMovie);
		});

		editBlock.addEventListener("click", (event) => {
			if (event.target === blockContent) {
				document.body.remove(addMovie);
			}
		});


		buttonReset.addEventListener("click", () => {
			descriptionElem.value = "";
			descriptionElemDate.value = "";
			descriptionElemUrl.value = "";
			descriptionElemRating.value = "";
			descriptionElemRuntime.value = "";
			overviewDescription.value = "";
		})
	}
	editMovie();

};


