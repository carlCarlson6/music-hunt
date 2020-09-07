import { IUser } from "./IUser";
import { IAlbum } from "./IAlbum";

export interface IVote {
    id: string
    user: IUser
    album: IAlbum
    isPositive: boolean
} 