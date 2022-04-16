import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Movies, MovieDocument } from "./movies.schema";

@Injectable()
export class MovieService {
    constructor(@InjectModel(Movies.name) private movieModel: Model<MovieDocument>) { }

    async findAll(): Promise<Movies[]> {
        return await this.movieModel.find().exec();
    }

    async save(movies): Promise<Movies> {
        var newData = {
            id: movies.id,
            name:movies.name,
            overview: movies.overview,
            popularity: movies.popularity,
            voteAverage: movies.vote_average,
            voteCount: movies.vote_count,
            releaseDate: movies.release_date,
            genre: movies.genres
        }
        const newMovie = new this.movieModel(newData);
        return newMovie.save();
    }

    async findById(id): Promise<Movies> {
        return await this.movieModel.findById(id).exec();
    }

    async removeById(id: string): Promise<Movies> {
        return await this.movieModel.findByIdAndDelete(id).exec();
    }
    
}