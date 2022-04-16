import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document , Schema as MongooseSchema} from "mongoose";

export type MovieDocument = Movies & Document

@Schema({_id:false})
class Genres {
    @Prop()
    id: number;
  
    @Prop()
    name: string;
  }

@Schema()
export class Movies {
    @Prop()
    id:String;

    @Prop()
    name: String;

    @Prop()
    overview:String;
 
    @Prop()
    popularity:Number;
 
    @Prop()
    voteAverage:Number;
  
    @Prop()
    voteCount:Number;

    @Prop()
    releaseDate:String;
    
    @Prop({type:MongooseSchema.Types.Array})
    genre:Genres[]
}

export const MovieSchema = SchemaFactory.createForClass(Movies);
