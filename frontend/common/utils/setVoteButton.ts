import { IUser } from "../models/entities/IUser";
import { IVote } from "../models/entities/IVote";


export const setVoteButton = (user: IUser, votes: Array<IVote>, isForPositiveVote: boolean): boolean => {
    if(!user) { return false; }
    
    const userVote: IVote = votes.find(vote => vote.user.id == user.id);
    if(!userVote) {return false; }

    return !xor(userVote.isPositive, isForPositiveVote);
}

const xor = (x: boolean, y: boolean): boolean => {
    const result = Number(!x)*Number(y) + Number(x)*Number(!y);
    return !!result;
}