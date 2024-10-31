import { Movie, Series } from "./types";

type SortableItems = Movie[] | Series[];

// Sorting by title
export const sortByTitle = (items: SortableItems, ascending: boolean = true): SortableItems => {
    return items.sort((a, b) => {
        if (a.title < b.title) return ascending ? -1 : 1;
        if (a.title > b.title) return ascending ? 1 : -1;
        return 0;
    });
};

// Sorting by release date
export const sortByReleaseDate = (items: SortableItems, ascending: boolean = true): SortableItems => {
    return items.sort((a, b) => {
        const dateA = new Date(a.releaseDate).getTime();
        const dateB = new Date(b.releaseDate).getTime();
        return ascending ? dateA - dateB : dateB - dateA;
    });
};

// Sorting by vote average
export const sortByVoteAverage = (items: SortableItems, ascending: boolean = true): SortableItems => {
    return items.sort((a, b) => {
        return ascending ? a.voteAverage - b.voteAverage : b.voteAverage - a.voteAverage;
    });
};
