import { IAlbum } from "../entities/IAlbum";

export interface IAlbumState {
    albums: Array<IAlbum>;
    album: IAlbum;
    fetchingData: boolean;
}