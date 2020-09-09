import { Length, IsUrl } from 'class-validator';
import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CommentInput {
    
    @Field()
    @Length(1)
    text: string

    @Field()
    albumId: string

}