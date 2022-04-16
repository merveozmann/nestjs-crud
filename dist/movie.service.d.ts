import { Model } from "mongoose";
import { HttpService } from '@nestjs/axios';
import { Movies, MovieDocument } from "src/movies.schema";
export declare class MovieService {
    private httpService;
    private movieModel;
    constructor(httpService: HttpService, movieModel: Model<MovieDocument>);
    findAll(): Promise<Movies[]>;
    save(movies: any): Promise<Movies>;
    findbyId(id: any): Promise<Movies>;
    removeById(id: string): Promise<Movies>;
    getMovies(): Promise<any>;
    getMoviesDetail(id: number): Promise<any>;
}
