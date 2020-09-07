import { Resolver, Query, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import { Vote } from "../entities/Vote";
import { isAuth } from "../middleware/isAuth";
import { logger } from "../middleware/logger";
import { AppContext } from "../../common/AppContext";
import { isVoteOperationAllowed } from "../middleware/isVoteOperationAllowed";
import { Album } from "../entities/Album";
import { findAlbumById } from "../../common/utils/findAlbumById";

@Resolver()
export class VoteResolver {
    
    @Mutation(() => Album)
    @UseMiddleware(logger, isAuth)
    async createVote(@Arg('albumId') albumId: string, @Arg('isPositive') isPositive: boolean, @Ctx() {userId}: AppContext): Promise<Album> {
        const createdAt: Date = new Date();
        const vote: Vote = Vote.create({albumId, isPositive, userId, createdAt})
        await vote.save();

        const album: Album = await findAlbumById(albumId);
        return album;
    }

    @Mutation(() => Album)
    @UseMiddleware(logger, isAuth, isVoteOperationAllowed)
    async updateVote(@Arg('voteId') voteId: string, @Arg('isPositive') isPositive: boolean): Promise<Album> {
        const updatedAt: Date = new Date();
        await Vote.update(voteId, {updatedAt, isPositive});

        const vote: Vote|undefined = await Vote.findOne(voteId);
        if(!vote) { throw new Error('problem when updating the vote') }

        const album: Album = await findAlbumById(vote.albumId);
        return album;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(logger, isAuth, isVoteOperationAllowed)
    async deleteVote(@Arg('voteId') voteId: string): Promise<boolean> {
        try {
            await Vote.delete({id: voteId});
            return true;
        } catch(error) { throw new Error(error.message); }
    }

}