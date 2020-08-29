import { ObjectType, Field } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class LoginUser {

    @Field(() => User)
    user: User;

    @Field()
    authToken: string;
}