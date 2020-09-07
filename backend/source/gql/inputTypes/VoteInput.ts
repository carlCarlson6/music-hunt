import { InputType, Field } from 'type-graphql';

@InputType()
export class VoteInput {
    
    @Field()
    albumId: string

    @Field()
    isPositive: boolean
}