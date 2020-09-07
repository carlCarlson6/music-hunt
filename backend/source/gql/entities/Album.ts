import { ObjectType, Field, ID, Int, GraphQLTimestamp, Root} from "type-graphql";
import { User } from "./User";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { findUserById } from "../../common/utils/findUserById";
import { Vote } from "./Vote";

@Entity({name:"musichunt-dev-ALBUM"})
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
    artist: string;

    @Field()
    @Column()
    genre: string;

    @Field()
    @Column()
    url: string;

    @Field(() => GraphQLTimestamp)
    @Column()
    createdAt: Date

    @Field(() => GraphQLTimestamp, {nullable:true})
    @Column({nullable:true})
    updatedAt: Date
    
    @Column('uuid')
    userId: string

    @Field(() => User)
    async user(@Root() album: Album): Promise<User> {
        return await findUserById(album.userId);
    }

    @Field(() => [Vote], {nullable:true})
    async votes(@Root() album: Album): Promise<Array<Vote>> {
        return await Vote.find({where: {albumId: album.id}});
    }

}