import { IUser } from "./IUser";
import { IVote } from "./IVote";

export interface IAlbum {
    id: string;
    title: string;
    genre: string;
    artist: string;
    votes?: Array<IVote>;
    url: string;
    user: IUser;
}