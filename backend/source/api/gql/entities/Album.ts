import { ObjectType, Field, ID, Int, GraphQLTimestamp, Root} from "type-graphql";
import { User } from "./User";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { getAlbumByUser } from "../../../services/AlbumServices";

@Entity({name:"musichunt-ALBUM"})
@ObjectType()
export class Album extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @Field(() => GraphQLTimestamp)
    @Column()
    createdAt: Date

    @Column('uuid')
    userId: string

    @Field(() => User)
    async user(@Root() album: Album): Promise<User> {
        return await getAlbumByUser(album.userId);
    }

}