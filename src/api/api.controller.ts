import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './api.service';

@Controller()
@ApiTags("TMDB Api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("movies-list")
  getmovies(){
    return this.appService.getMovies()
  }
  @Get("movie-detail/:id")
  getMoviesDetail(@Param('id') id:number){
    return this.appService.getMoviesDetail(id)
  }
  
}
