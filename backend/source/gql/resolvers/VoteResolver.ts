import { Resolver, Query, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import { Vote } from "../entities/Vote";
import { isAuth } from "../middleware/isAuth";
import { logger } from "../middleware/logger";
import { AppContext } from "../../common/AppContext";
import { isVoteOperationAllowed } from "../middleware/isVoteOperationAllowed";

@Resolver()
export class VoteResolver {
    
    @Mutation(() => Vote)
    @UseMiddleware(isAuth, logger)
    async createVote(@Arg('albumId') albumId: string, @Arg('isPositive') isPositive: boolean, @Ctx() {userId}: AppContext): Promise<Vote> {
        const createdAt: Date = new Date();
        const vote: Vote = Vote.create({albumId, isPositive, userId, createdAt})
        await vote.save();

        return vote;
    }

    @Mutation(() => Vote)
    @UseMiddleware(isAuth, isVoteOperationAllowed, logger)
    async updateVote(@Arg('voteId') voteId: string, @Arg('isPositive') isPositive: boolean): Promise<Vote> {
        const updatedAt: Date = new Date();
        await Vote.update(voteId, {updatedAt, isPositive});

        const vote: Vote|undefined = await Vote.findOne(voteId);
        if(!vote) { throw new Error('problem when updating the vote') }

        return vote;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth, isVoteOperationAllowed, logger)
    async deleteVote(@Arg('voteId') voteId: string): Promise<boolean> {
        try {
            await Vote.delete({id: voteId});
            return true;
        } catch(error) { throw new Error(error.message); }
    }

}