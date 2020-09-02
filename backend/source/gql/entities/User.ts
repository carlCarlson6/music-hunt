import { ObjectType, Field, ID, GraphQLISODateTime, Root } from "type-graphql";
import { Album } from "./Album";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { getAlbumsFromUser } from "../../common/utils/getAlbumsFromUser";

@Entity({name:"musichunt-dev-USER"})
@ObjectType()
export class User extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column({ unique: true})
    email: string;

    @Field(() => GraphQLISODateTime)
    @Column('timestamp')
    createdAt: Date;

    @Column()
    password: string;

    @Field(() => [Album], {nullable:true})
    async albums(@Root() user: User): Promise<Array<Album>> {
        return await getAlbumsFromUser(user.id);
    }
}