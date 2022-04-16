"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const mongoose_1 = require("@nestjs/mongoose");
const api_controller_1 = require("./api/api.controller");
const api_service_1 = require("./api/api.service");
const movies_schema_1 = require("./movies/movies.schema");
const movie_controller_1 = require("./movies/movie.controller");
const movie_service_1 = require("./movies/movie.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb://localhost/netflix'),
            mongoose_1.MongooseModule.forFeature([{ name: movies_schema_1.Movies.name, schema: movies_schema_1.MovieSchema }]), axios_1.HttpModule],
        controllers: [api_controller_1.AppController, movie_controller_1.MovieController],
        providers: [api_service_1.AppService, movie_service_1.MovieService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map