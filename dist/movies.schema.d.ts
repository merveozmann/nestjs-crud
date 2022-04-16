/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Schema as MongooseSchema } from "mongoose";
export declare type MovieDocument = Movies & Document;
declare class Genres {
    id: number;
    name: string;
}
export declare class Movies {
    id: String;
    name: String;
    overview: String;
    popularity: Number;
    voteAverage: Number;
    voteCount: Number;
    releaseDate: String;
    genre: Genres[];
}
export declare const MovieSchema: MongooseSchema<Document<Movies, any, any>, import("mongoose").Model<Document<Movies, any, any>, any, any, any>, {}, {}>;
export {};
