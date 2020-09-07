import { ObjectType, Field, ID, Int, GraphQLTimestamp, Root} from "type-graphql";
import { User } from "./User";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { findUserById } from "../../common/utils/findUserById";

@Entity({name:"musichunt-dev-VOTE"})
@ObjectType()
export class Vote extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => GraphQLTimestamp)
    @Column()
    createdAt: Date

    @Field(() => GraphQLTimestamp, {nullable:true})
    @Column({nullable:true})
    updatedAt: Date

    @Column('uuid')
    userId: string

    @Column()
    albumId: string

    @Field(() => User)
    async user(@Root() vote: Vote): Promise<User> {
        return await findUserById(vote.userId);
    }

    @Field(() => Boolean, {nullable:true})
    @Column({nullable:true})
    isPositive: boolean
}