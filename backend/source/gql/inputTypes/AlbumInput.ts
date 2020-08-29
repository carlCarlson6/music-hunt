import { Length, IsUrl } from 'class-validator';
import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class AlbumInput {

    @Field({nullable:true}) 
    @Length(1, undefined, {message: 'album title can not be empty'})
    title: string; 

    @Field({nullable:true})
    artist: string;

    @Field({nullable:true})
    genre: string;

    @Field({nullable:true})
    @Length(1, undefined, {message: 'can not be empty'})
    @IsUrl(undefined, {message: 'must be a valid url'})
    url: string;

    @Field(() => Int, {defaultValue:0, nullable:true})
    votes: number; 
}