import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './api/api.controller';
import { AppService } from './api/api.service';
import { Movies,MovieSchema } from './movies/movies.schema';
import { MovieController } from './movies/movie.controller';
import { MovieService } from './movies/movie.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/netflix'),
            MongooseModule.forFeature([{name:Movies.name,schema:MovieSchema}]),HttpModule],
  controllers: [AppController,MovieController],
  providers: [AppService,MovieService],
})
export class AppModule {}
