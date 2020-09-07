import { MiddlewareFn } from "type-graphql";
import { AppContext } from "../../common/AppContext";
import { Vote } from "../entities/Vote";

export const isVoteOperationAllowed: MiddlewareFn<AppContext> = async ({context, args}, next) => {
    const userId: string = context.userId;
    const vote: Vote|undefined = await Vote.findOne(args.voteId);
    
    if(!vote) {
        throw new Error('error while finding the vote')
    }

    if(userId === vote.userId) {
        return next();
    } else {
        throw new Error('operation not allowed');
    }
}