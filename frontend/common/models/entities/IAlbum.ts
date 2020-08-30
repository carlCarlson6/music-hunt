import { IUser } from "./IUser";

export interface IAlbum {
    id: string;
    title: string;
    genre: string;
    artist: string;
    votes: number;
    url: string;
    user: IUser;
}