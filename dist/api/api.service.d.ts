import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private httpService;
    constructor(httpService: HttpService);
    getMovies(): Promise<any>;
    getMoviesDetail(id: number): Promise<any>;
}
