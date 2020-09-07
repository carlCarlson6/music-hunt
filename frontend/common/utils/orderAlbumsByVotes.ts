import { IAlbum } from "../models/entities/IAlbum";
import { countTotalVotes } from "./CountTotalVotes";

export const orderAlbumsByVotes = (albumA: IAlbum, albumB: IAlbum) => {
    const totalVotesAlbumA: number = countTotalVotes(albumA.votes); 
    const totalVotesAlbumB: number = countTotalVotes(albumB.votes);
    
    return totalVotesAlbumB - totalVotesAlbumA;
}