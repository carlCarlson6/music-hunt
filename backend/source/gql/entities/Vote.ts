import { ObjectType, Field, ID, GraphQLTimestamp, Root} from "type-graphql";
import { User } from "./User";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { findUserById } from "../../common/utils/findUserById";
import { vote_table_name } from "../../dev_env_vars";

@Entity({name: vote_table_name})
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
    @Field(() => User)
    async user(@Root() vote: Vote): Promise<User> {
        return await findUserById(vote.userId);
    }

    @Column('uuid')
    albumId: string
    
    @Field(() => Boolean, {nullable:true})
    @Column({nullable:true})
    isPositive: boolean
}