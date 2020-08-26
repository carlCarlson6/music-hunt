import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType()
@Entity({name:"musichunt-ALBUM"})
export class User extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    genre: string;

    @Field()
    @Column()
    url: string;

    @Field(() => Int)
    @Column()
    votes: number;

}