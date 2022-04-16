import { Test, TestingModule } from '@nestjs/testing'
import { MovieController } from './movie.controller'
import { MovieService } from './movie.service'
import { Movies } from "./movies.schema";


describe("Movie Controller Unit Test", () => {
    let movieController: MovieController;
    let movieService: MovieService;

    beforeAll(async () => {
        const MovieServiceProvider = {
            provide: MovieService,
            useFactory: () => ({
                save: jest.fn(() => { }),
                findAll: jest.fn(() => []),
                findById: jest.fn(() => { }),
                removeById: jest.fn(() => { })
            })
        }
        const app: TestingModule = await Test.createTestingModule({
            controllers: [MovieController],
            providers: [MovieService, MovieServiceProvider]
        }).compile()
        movieController = app.get<MovieController>(MovieController)
        movieService = app.get<MovieService>(MovieService);
    })
    it("call save", () => {
        var m = new Movies()
        expect(movieController.save(m)).not.toEqual(null);
    })
    it("call save", () => {
        var data = {
            "id": "311",
            "name": "movie name",
            "overview": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
            "popularity": 29.397,
            "voteAverage": 8.4,
            "voteCount": 4117,
            "releaseDate": "1984-05-23",
            "genre": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 80,
                    "name": "Crime"
                }
            ],

        }
        movieController.save(data);
        expect(movieService.save).toHaveBeenCalled()
        expect(movieService.save).toBeCalledWith(data);
    })

    it("call findAll", () => {
        movieController.findAll();
        expect(movieService.findAll).toHaveBeenCalled();
    })
    it("call findById", () => {
        var id = "123456789"
        movieController.findById(id);
        expect(movieService.findById).toHaveBeenCalled();

    })
    it("call removeById", () => {
        var id = "123456789"
        movieController.removeById(id);
        expect(movieService.removeById).toHaveBeenCalled();

    })
})