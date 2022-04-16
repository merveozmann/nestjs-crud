import { Movies } from "./movies.schema";
import { MovieService } from "./movie.service";
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    save(movies: Movies): Promise<"Not Found Data" | Movies>;
    findAll(): Promise<Movies[]>;
    findById(id: any): Promise<"Not Found Data" | Movies>;
    removeById(id: string): Promise<Movies>;
}
