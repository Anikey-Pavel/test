export const deleteMovieCard = () => {
	const items = document.querySelector(".content-main-block__items");
	const deleteMovieCard = document.querySelector(".delete-movie");
	const close = document.querySelector(".content__close");
	const deleteBody = document.querySelector(".delete-movie__body");

	items.addEventListener("click", (event) => {
		if (event.target.id !== "delete") return;
		deleteMovieCard.classList.add("_active");
		document.body.classList.add("lock");
	});

	close.addEventListener("click", () => {
		deleteMovieCard.classList.remove("_active");
		document.body.classList.remove("lock");
	});

	deleteBody.addEventListener("click", () => {
		deleteMovieCard.classList.remove("_active");
		document.body.classList.remove("lock");
	});
};
