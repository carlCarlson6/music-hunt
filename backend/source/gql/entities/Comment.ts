import { ObjectType, Field, ID, GraphQLTimestamp, Root} from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { User } from "./User";
import { findUserById } from "../../common/utils/findUserById";

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

    @Field(() => User)
    async user(@Root() comment: Comment): Promise<User> {
        return await findUserById(comment.userId);
    }
}