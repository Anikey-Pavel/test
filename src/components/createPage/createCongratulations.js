export const createWindowCongratulations = () => {
	const congratulations = document.createElement("div");
	congratulations.classList.add("congratulations");
	congratulations.id = "congratulations";
	document.body.append(congratulations);

	const congratulationsBody = document.createElement("div");
	congratulationsBody.classList.add("congratulations__body");
	congratulations.append(congratulationsBody);

	const congratulationsContent = document.createElement("div");
	congratulationsContent.classList.add(
		"congratulations__content",
		"content-congratulations"
	);
	congratulationsBody.append(congratulationsContent);

	const contentCongratulationsClose = document.createElement("div");
	contentCongratulationsClose.classList.add("content-congratulations__close");
	contentCongratulationsClose.innerText = "X";
	congratulationsContent.append(contentCongratulationsClose);

	congratulationsBody.addEventListener("click", () => {
		congratulations.remove();
	});

	contentCongratulationsClose.addEventListener("click", () => {
		congratulations.remove();
	});

	const contentCongratulationsContainer = document.createElement("div");
	contentCongratulationsContainer.classList.add(
		"content-congratulations__container"
	);
	congratulationsContent.append(contentCongratulationsContainer);

	const contentCongratulationsImg = document.createElement("div");
	contentCongratulationsImg.classList.add("content-congratulations__img");
	contentCongratulationsContainer.append(contentCongratulationsImg);

	const img = document.createElement("img");
	img.alt = "icon";
	img.src = "./img/icons/Path 4.svg";
	contentCongratulationsImg.append(img);

	const contentCongratulationsTitle = document.createElement("div");
	contentCongratulationsTitle.classList.add("content-congratulations__title");
	contentCongratulationsTitle.innerText = "congratulations";
	contentCongratulationsContainer.append(contentCongratulationsTitle);

	const contentCongratulationsSubtitle = document.createElement("div");
	contentCongratulationsSubtitle.classList.add(
		"content-congratulations__subtitle"
	);
	contentCongratulationsSubtitle.innerText =
		"The movie has been added to database successfully";
	contentCongratulationsContainer.append(contentCongratulationsSubtitle);
};
