import { AppService } from './api.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getmovies(): Promise<any>;
    getMoviesDetail(id: number): Promise<any>;
}
