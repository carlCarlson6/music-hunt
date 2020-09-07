import { Resolver, Query, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import { Vote } from "../entities/Vote";
import { VoteInput } from "../inputTypes/VoteInput";
import { isAuth } from "../middleware/isAuth";
import { logger } from "../middleware/logger";
import { AppContext } from "../../common/AppContext";
import { isVoteOperationAllowed } from "../middleware/isVoteOperationAllowed";

@Resolver()
export class VoteResolver {
    

    @Query(() => [Vote], {nullable:true})
    async votes(): Promise<Array<Vote>> {
        return await Vote.find();
    }

    @Mutation(() => Vote)
    @UseMiddleware(isAuth, logger)
    async createVote(@Arg('data') {albumId, isPositive}: VoteInput, @Ctx() {userId}: AppContext): Promise<Vote> {
        const createdAt: Date = new Date();
        const vote: Vote = Vote.create({albumId, isPositive, userId, createdAt})
        await vote.save();

        return vote;
    }

    @Mutation(() => Vote)
    @UseMiddleware(isAuth, isVoteOperationAllowed, logger)
    async updateVote(@Arg('voteId') voteId: string, @Arg('isPositive') isPositive: boolean, @Ctx() {userId}: AppContext): Promise<Vote> {
        const updatedAt: Date = new Date();
        await Vote.update(voteId, {updatedAt, isPositive});

        const vote: Vote|undefined = await Vote.findOne(voteId);
        if(!vote) { throw new Error('problem when updating the vote') }

        return vote;
    }

    @Mutation(() => Vote)
    @UseMiddleware(isAuth, isVoteOperationAllowed, logger)
    async deleteVote() {
        
    }

}