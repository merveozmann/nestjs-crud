import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Movies } from "./movies.schema";
import { MovieService } from "./movie.service";
import { ApiTags, ApiOkResponse, ApiNotFoundResponse } from "@nestjs/swagger";

@Controller("movie")
@ApiTags("Movie Crud")
export class MovieController {
    constructor(private readonly movieService: MovieService) { }

    @Post()
    @ApiOkResponse({ description: 'Data Save Success' })
    @ApiNotFoundResponse({ description: 'Not Found Data' })
    async save(@Body() movies: Movies) {
        if (!Object.keys(movies).length) {
            return "Not Found Data"
        } else {
            const newMovie = await this.movieService.save(movies);
            return newMovie;
        }
    }
    @Get()
    @ApiOkResponse({ description: 'Movies List Success' })
    async findAll() {
        return await this.movieService.findAll()
    }
    @Get(":id")
    @ApiOkResponse({ description: 'Movie List Success' })
    @ApiNotFoundResponse({ description: 'Not Found Data' })
    async findById(@Param('id') id) {
        const movie = await this.movieService.findById(id);
        if (!movie) {
            return "Not Found Data"
        } else {
            return movie;
        }
    }

    @Delete(":id")
    @ApiOkResponse({ description: 'Movie Deleted Successfully.'})
    async removeById(@Param('id') id: string) {
        return await this.movieService.removeById(id);
    }
}