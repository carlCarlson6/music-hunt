import { IUser } from "./IUser";
import { IVote } from "./IVote";
import { IComment } from "./IComment";

export interface IAlbum {
    id: string;
    title: string;
    genre: string;
    artist: string;
    votes?: Array<IVote>;
    url: string;
    user: IUser;
    comments?: Array<IComment>
}