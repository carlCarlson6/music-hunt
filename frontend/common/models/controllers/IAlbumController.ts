import { IAlbumState } from "../states/IAlbumState";
import { IAlbumServices } from "../services/IAlbumServices";

export interface IAlbumController {
    state: IAlbumState,
    albumServices: IAlbumServices
}