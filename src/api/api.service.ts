import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor (private httpService:HttpService){}
  
  async getMovies(){
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&vote_count.gte=1500&vote_average.gte=8.4&watch_region=TR&with_watch_monetization_types=flatrate&watch_provider_id=8"
    const {data} = await firstValueFrom(this.httpService.get(url))
    return data;
  }
  async getMoviesDetail(id:number){
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=&language=en-US`
    const {data} = await firstValueFrom(this.httpService.get(url))
    return data;
  }
}
