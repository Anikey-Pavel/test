export const createMoreButton = (container) => {
	container = document.querySelector(".main-block__content")
	const button = document.createElement("button");
	button.type = "button";
	button.id = "showMore";
	button.innerText = "Show more";

	button.addEventListener("click", () => {
		const url = new URL(window.location);
		url.searchParams.set("page", 2);
		window.history.pushState(null, "", url.toString());
	});
	container.append(button);
};
