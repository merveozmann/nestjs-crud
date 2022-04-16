import { Test,TestingModule } from "@nestjs/testing";
import { MovieService } from "./movie.service";
import { FindOneOptions } from "typeorm";
import { Movies } from "./movies.schema";

class MovieServiceMock{
    save(Movies:any){
        return {};
    }
    findAll(){
        return [];
    }
    findById(id:string){
        return {}
    }
    removeById(id:string){
        return {}
    }
}

describe.only('MovieService',()=>{
    let movieService: MovieService;

    beforeAll(async ()=>{
        const MovieServiceProvider={
            provide:MovieService,
            useClass:MovieServiceMock
        }

        const module: TestingModule=await Test.createTestingModule({
            providers:[
                MovieService,MovieServiceProvider
            ]
        }).compile()
        movieService=module.get<MovieService>(MovieService)
    })
    it("should call save method",async()=>{
        const saveMovieSpy = jest.spyOn(movieService,"save");
        movieService.save(Movies);
        expect(saveMovieSpy).toHaveBeenCalledWith(Movies)
    })
    it("should call findById method",async ()=>{
        const findByIdSpy=jest.spyOn(movieService,"findById");
        const findOneOptions:FindOneOptions={};
        movieService.findById(findOneOptions);
        expect(findByIdSpy).toHaveBeenCalledWith(findOneOptions);
    })
    it("should call removeById method",async ()=>{
        const removeByIdSpy=jest.spyOn(movieService,"removeById");
        const id='id'
        movieService.removeById(id);
        expect(removeByIdSpy).toHaveBeenCalledWith(id);
    })
    it("should call findAll method",async ()=>{
        const findAllSpy=jest.spyOn(movieService,"findAll");
        movieService.findAll();
        expect(findAllSpy).toHaveBeenCalled()
    })
})