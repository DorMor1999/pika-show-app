export type Movie = {
  id: number;
  title: string;
  language: string;
  releaseDate: string;
  voteAverage: number;
  isAdult: boolean;
  overview: string;
  posterPath: string;
};

export type Series = {
  id: number;
  title: string;
  language: string;
  releaseDate: string;
  voteAverage: number;
  isAdult: boolean;
  overview: string;
  posterPath: string;
};

export type SortTypeOBJ = {
    ascending: boolean;
    sortType: string;
    sortFunction: (items: Movie[] | Series[], ascending: boolean) => Movie[] | Series[];
  };
