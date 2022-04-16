import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, HttpStatus } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("Movie (e2e) Test", () => {
  let app: INestApplication;

  beforeEach(async () => {
    jest.setTimeout(10000);
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("should get findAll", () => {
    return request(app.getHttpServer())
      .get("/movie")
      .set("Accept", "application/json")
      .expect(HttpStatus.OK);
  });
  it("should post save", () => {
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
    return request(app.getHttpServer())
      .post("/movie")
      .set("Accept", "application/json")
      .send(data)
      .expect(HttpStatus.CREATED);
  });
  it("should get findById ", () => {
    return request(app.getHttpServer())
      .get("/movie/625aa066a1063c7c9d18f786")
      .set("Accept", "application/json")
      .expect(HttpStatus.OK);
  });
  it("should delete removeById", () => {
    return request(app.getHttpServer())
      .delete("/movie/625aa066a1063c7c9d18f786")
      .set("Accept", "application/json")
      .expect(HttpStatus.OK);
  });
});