import { IVote } from "../models/entities/IVote";

export const countTotalVotes = (votes: Array<IVote>): number => {
    const upVotes: Array<IVote> = votes.filter(vote => vote.isPositive);
    const downVotes: Array<IVote> = votes.filter(vote => !vote.isPositive);
    const totalVotes: number = upVotes.length - downVotes.length;
    return totalVotes;
}