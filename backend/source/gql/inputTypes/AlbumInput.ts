import { Length, IsUrl } from 'class-validator';
import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class AlbumInput {

    @Field() 
    @Length(6, undefined, {message: 'password must be 6 characters min'})
    title?: string; 

    @Field()
    genre?: string;

    @Field()
    @Length(1, undefined, {message: 'can not be empty'})
    @IsUrl(undefined, {message: 'must be a valid url'})
    url?: string;

    @Field(() => Int, {defaultValue:0})
    votes?: number;
    
}