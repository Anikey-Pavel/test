import { defaultPoster } from "../components/createPage/createMovieItem";

export const makeSaveImage = (img) => {
	img.onerror = () => {
		img.src = defaultPoster;
	};
};
