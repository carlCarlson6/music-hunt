import { ObjectType, Field, ID, GraphQLTimestamp} from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name:"musichunt-dev-COMMENT"})
@ObjectType()
export class Comment extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column()
    text: string;

    @Field(() => GraphQLTimestamp)
    @Column()
    createdAt: Date

    @Column('uuid')
    userId: string
    @Column('uuid')
    albumId: string
}