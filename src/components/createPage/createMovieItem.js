export const createMovieItem = () => {
	const movieItem = document.createElement("template");
	const item = document.createElement("div");
	const itemImage = document.createElement("div");
	const img = document.createElement("img");
	const itemDescription = document.createElement("div");
	const itemtextBlock = document.createElement("div");
	const itemTitle = document.createElement("div");
	const itemCotegory = document.createElement("div");
	const itemDate = document.createElement("div");

	movieItem.id = "movie-item";
	item.classList.add("content-main-block__item");
	item.classList.add("item");
	itemImage.classList.add("item__image");
	itemImage.classList.add("_ibg");
	itemDescription.classList.add("item__description");
	itemtextBlock.classList.add("item__text-block");
	itemTitle.classList.add("item__title");
	itemCotegory.classList.add("item__category");
	itemDate.classList.add("item__date");

	img.alt = "Poster";

	document.body.prepend(movieItem);
	movieItem.append(item);
	item.append(itemImage);
	itemImage.append(img);
	item.append(itemDescription);
	itemDescription.append(itemtextBlock);
	itemtextBlock.append(itemTitle);
	itemtextBlock.append(itemCotegory);
	itemDescription.append(itemDate);
}

