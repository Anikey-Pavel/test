import { updateMoviesState } from "../../api";

export const sortMovie = (e) => {
    const target = e.target;
    if (target.tagName === "SELECT") {
        const sortByText = target.options[target.selectedIndex].value;
        const sortOrderText = target.options[target.selectedIndex].dataset.order;
        console.log(sortOrderText);
        updateMoviesState({ sortBy: sortByText, sortOrder: sortOrderText });
    } else {
        const all = document.querySelector("#All");
        if (target !== all) {
            const formData = new FormData(e.currentTarget);
            updateMoviesState({ filter: formData.getAll("genre") });
        }
    }
};