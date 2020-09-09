import { ObjectType, Field, ID, GraphQLTimestamp, Root } from "type-graphql";
import { Album } from "./Album";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { getAlbumsFromUser } from "../../common/utils/getAlbumsFromUser";
import { user_table_name } from "../../../env_vars";

@Entity({name: user_table_name})
@ObjectType()
export class User extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column({ unique: true})
    email: string;

    @Field(() => GraphQLTimestamp)
    @Column('timestamp')
    createdAt: Date;

    @Column()
    password: string;

    @Field(() => [Album], {nullable:true})
    async albums(@Root() user: User): Promise<Array<Album>> {
        return await getAlbumsFromUser(user.id);
    }

}