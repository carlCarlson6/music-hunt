import { Length, IsUrl } from 'class-validator';
import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class AlbumInput {

    @Field({nullable:true}) 
    @Length(6, undefined, {message: 'password must be 6 characters min'})
    title: string; 

    @Field({nullable:true})
    genre: string;

    @Field({nullable:true})
    @Length(1, undefined, {message: 'can not be empty'})
    @IsUrl(undefined, {message: 'must be a valid url'})
    url: string;

    @Field(() => Int, {defaultValue:0, nullable:true})
    votes: number;
    
}