export const createDetails = (container) => {
	const details = document.createElement("div");
	details.classList.add("details");
	container.append(details);

	const detailsHeader = document.createElement("div");
	detailsHeader.classList.add("details__header");
	details.append(detailsHeader);

	const logo = document.createElement("img");
	logo.src = "";
	logo.alt = "Logo";
	detailsHeader.append(logo);

	const search = document.createElement("img");
	logo.src = "";
	logo.alt = "Search";
	detailsHeader.append(search);

	const detailsContent = document.createElement("div");
	detailsContent.classList.add("details__content", "content-details");
	details.append(detailsContent);

	const contentDetailsImage = document.createElement("div");
	contentDetailsImage.classList.add("content-details__image");
	detailsContent.append(contentDetailsImage);

	const poster = document.createElement("img");
	poster.src = "";
	poster.alt = "poster";
	contentDetailsImage.append(poster);

	const contentDetailsDescription = document.createElement("div");
	contentDetailsDescription.classList.add("content-details__description", "content-description");
	detailsContent.append(contentDetailsDescription);

	const contentDescriptionHeader = document.createElement("div");
	contentDescriptionHeader.classList.add("content-description__header");
	contentDetailsDescription.append(contentDescriptionHeader);

	const contentDescriptionTitle = document.createElement("div");
	contentDescriptionTitle.classList.add("content-description__title");
	contentDescriptionTitle.innerText = "Pulp Fiction";
	contentDescriptionHeader.append(contentDescriptionTitle);

	const contentDescriptionRating = document.createElement("div");
	contentDescriptionRating.classList.add("content-description__rating");
	contentDescriptionHeader.append(contentDescriptionRating);

	const span = document.createElement("span");
	span.innerText = 8.9;
	contentDescriptionRating.append(span);

	const contentDescriptionSubtitle = document.createElement("div");
	contentDescriptionSubtitle.classList.add("content-description__subtitle");
	contentDescriptionSubtitle.innerText = "Action & Adventure";
	contentDetailsDescription.append(contentDescriptionSubtitle);

	const contentDescriptionTime = document.createElement("div");
	contentDescriptionTime.classList.add("content-description__time");
	contentDetailsDescription.append(contentDescriptionTime);

	const contentDescriptionDate = document.createElement("div");
	contentDescriptionDate.classList.add("content-description__date");
	contentDescriptionDate.innerText = "1994";
	contentDescriptionTime.append(contentDescriptionDate);

	const contentDescriptionRuntime = document.createElement("div");
	contentDescriptionRuntime.classList.add("content-description__runtime");
	contentDescriptionRuntime.innerText = "2h 34min";
	contentDescriptionTime.append(contentDescriptionRuntime);

	const contentDescriptionDescription = document.createElement("div");
	contentDescriptionDescription.classList.add("content-description__description");
	contentDescriptionDescription.innerText = "decription";
	contentDetailsDescription.append(contentDescriptionDescription);
}