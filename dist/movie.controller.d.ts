import { Movies } from "./movies.schema";
import { MovieService } from "./movie.service";
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getmovies(): Promise<any>;
    getMoviesDetail(id: number): Promise<any>;
    save(response: any, movies: Movies): Promise<any>;
    findAll(): Promise<Movies[]>;
    findById(response: any, id: any): Promise<any>;
    removeById(id: string): Promise<Movies>;
}
