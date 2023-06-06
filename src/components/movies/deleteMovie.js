import { deleteMovie } from "../../api";

export const deleteMovieCard = () => {
	const items = document.querySelector(".content-main-block__items");
	const buttonDelete = document.querySelector("#delete");
	const deleteMovieCard = document.querySelector(".delete-movie");
	const close = document.querySelector(".content__close");
	const confirm = document.querySelector("#confirm");
	const deleteBody = document.querySelector(".delete-movie__body");

	confirm.addEventListener("click", (e) => {
		deleteMovie();
	});

	items.addEventListener("click", (event) => {
		if (event.target.id != "delete") return;
		deleteMovieCard.classList.add("_active");
		document.body.classList.add("lock");

		if (event.target.className != "content__close") return;
		deleteMovieCard.classList.remove("_active");
		document.body.classList.remove("lock");

		if (event.target === deleteBody) {
			deleteMovieCard.classList.remove("_active");
			document.body.classList.remove("lock");
		}
	});
};
