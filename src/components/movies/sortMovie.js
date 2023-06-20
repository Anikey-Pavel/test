import { updateMoviesState } from "../../api";

export const filterDocumntary = () => {
    updateMoviesState({ filter: "Documentary" });
};

export const filterComedy = () => {
    updateMoviesState({ filter: "Comedy" });
};

export const filterHorror = () => {
    updateMoviesState({ filter: "Horror" });
};

export const filterCrime = () => {
    updateMoviesState({ filter: "Crime" });
};

export const filterAll = () => {
    const url = new URL(window.location);
    url.searchParams.delete("filter");
    window.history.pushState(null, "movie details", url.toString());
    updateMoviesState();
};