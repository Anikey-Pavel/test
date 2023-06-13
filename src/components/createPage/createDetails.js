import { parseDate, parseTime } from "../../utils/date";
import { makeSaveImage } from "../../utils/img";

export const createDetails = (container, movie) => {
	const details = document.createElement("div");
	details.classList.add("details");
	container.append(details);

	const detailsHeader = document.createElement("div");
	detailsHeader.classList.add("details__header");
	details.append(detailsHeader);

	const logo = document.createElement("img");
	logo.src = "./img/icons/logo.svg";
	logo.alt = "Logo";
	detailsHeader.append(logo);

	const search = document.createElement("img");
	search.src = "./img/icons/Search Button.svg";
	search.alt = "Search";
	detailsHeader.append(search);

	const detailsContent = document.createElement("div");
	detailsContent.classList.add("details__content", "content-details");
	details.append(detailsContent);

	const contentDetailsImage = document.createElement("div");
	contentDetailsImage.classList.add("content-details__image");
	detailsContent.append(contentDetailsImage);

	const poster = document.createElement("img");
	poster.src = movie.poster_path;
	makeSaveImage(poster);
	poster.alt = "poster";
	contentDetailsImage.append(poster);

	const contentDetailsDescription = document.createElement("div");
	contentDetailsDescription.classList.add(
		"content-details__description",
		"content-description"
	);
	detailsContent.append(contentDetailsDescription);

	const contentDescriptionHeader = document.createElement("div");
	contentDescriptionHeader.classList.add("content-description__header");
	contentDetailsDescription.append(contentDescriptionHeader);

	const contentDescriptionTitle = document.createElement("div");
	contentDescriptionTitle.classList.add("content-description__title");
	contentDescriptionTitle.innerText = movie.title;
	contentDescriptionHeader.append(contentDescriptionTitle);

	const contentDescriptionRating = document.createElement("div");
	contentDescriptionRating.classList.add("content-description__rating");
	contentDescriptionHeader.append(contentDescriptionRating);

	const span = document.createElement("span");
	span.innerText = movie.vote_average;
	contentDescriptionRating.append(span);

	const contentDescriptionSubtitle = document.createElement("div");
	contentDescriptionSubtitle.classList.add("content-description__subtitle");
	contentDescriptionSubtitle.innerText = movie.genres.join(" & ");
	contentDetailsDescription.append(contentDescriptionSubtitle);

	const contentDescriptionTime = document.createElement("div");
	contentDescriptionTime.classList.add("content-description__time");
	contentDetailsDescription.append(contentDescriptionTime);

	const contentDescriptionDate = document.createElement("div");
	contentDescriptionDate.classList.add("content-description__date");
	contentDescriptionDate.innerText = parseDate(movie.release_date).year;
	contentDescriptionTime.append(contentDescriptionDate);

	const contentDescriptionRuntime = document.createElement("div");
	contentDescriptionRuntime.classList.add("content-description__runtime");
	contentDescriptionRuntime.innerText = parseTime(movie.runtime);
	contentDescriptionTime.append(contentDescriptionRuntime);

	const contentDescriptionDescription = document.createElement("div");
	contentDescriptionDescription.classList.add(
		"content-description__description"
	);
	contentDescriptionDescription.innerText = movie.overview;
	contentDetailsDescription.append(contentDescriptionDescription);
};
