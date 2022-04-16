import { Model } from "mongoose";
import { Movies, MovieDocument } from "./movies.schema";
export declare class MovieService {
    private movieModel;
    constructor(movieModel: Model<MovieDocument>);
    findAll(): Promise<Movies[]>;
    save(movies: any): Promise<Movies>;
    findById(id: any): Promise<Movies>;
    removeById(id: string): Promise<Movies>;
}
