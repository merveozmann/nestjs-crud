"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getMovies() {
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=e8413d3501685a646f4e03fae8d61671&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&vote_count.gte=1500&vote_average.gte=8.4&watch_region=TR&with_watch_monetization_types=flatrate&watch_provider_id=8";
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
    async getMoviesDetail(id) {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=e8413d3501685a646f4e03fae8d61671&language=en-US`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
        return data;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=api.service.js.map