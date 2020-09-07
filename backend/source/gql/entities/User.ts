import { ObjectType, Field, ID, GraphQLTimestamp, Root } from "type-graphql";
import { Album } from "./Album";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { getAlbumsFromUser } from "../../common/utils/getAlbumsFromUser";
import { Vote } from "./Vote";

@Entity({name:"musichunt-dev-USER"})
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

    @Field(() => [Vote], {nullable:true})
    async votes(@Root() user: User): Promise<Array<Vote>> {
        return await Vote.find({where: {userId: user.id}});
    }
}