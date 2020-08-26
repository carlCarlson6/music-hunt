import { IsEmail, Length } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class UserInput {
    
    @Field() 
    @IsEmail(undefined, {message: 'this is not a valid email'})
    email: string; 

    @Field()
    @Length(6, undefined, {message: 'password must be 6 characters min'})
    password: string;
    
}