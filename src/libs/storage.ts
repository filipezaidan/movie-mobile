export interface MoviesProps{
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    backdrop_path: string;
}

export interface GenresProps{
    id: number;
    name: string;
}