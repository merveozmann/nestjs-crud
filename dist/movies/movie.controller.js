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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movies_schema_1 = require("./movies.schema");
const movie_service_1 = require("./movie.service");
const swagger_1 = require("@nestjs/swagger");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async save(movies) {
        if (!Object.keys(movies).length) {
            return "Not Found Data";
        }
        else {
            const newMovie = await this.movieService.save(movies);
            return newMovie;
        }
    }
    async findAll() {
        return await this.movieService.findAll();
    }
    async findById(id) {
        const movie = await this.movieService.findById(id);
        if (!movie) {
            return "Not Found Data";
        }
        else {
            return movie;
        }
    }
    async removeById(id) {
        return await this.movieService.removeById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Data Save Success' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not Found Data' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movies_schema_1.Movies]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "save", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Movies List Success' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOkResponse)({ description: 'Movie List Success' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Not Found Data' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "findById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOkResponse)({ description: 'Movie Deleted Successfully.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "removeById", null);
MovieController = __decorate([
    (0, common_1.Controller)("movie"),
    (0, swagger_1.ApiTags)("Movie Crud"),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map