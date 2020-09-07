import { IFormValue } from "../entities/IFormValue";
import { IAlbum } from "../entities/IAlbum";

export interface IAlbumServices {
    getAlbums: () => Promise<Array<IAlbum>>
    getAlbum: (albumId: string) => Promise<IAlbum>
    addAlbum: (addALbumForm: Array<IFormValue>) => Promise<IAlbum>
    editAlbum: (albumId:string, editALbumForm: Array<IFormValue>) => Promise<IAlbum>
    voteAlbum: (albumId:string, isPositive: boolean) => Promise<IAlbum>
    editAlbumVote: (voteId:string, isPositive: boolean) => Promise<IAlbum>
    deleteAlbumVote: (voteId: string) => Promise<boolean>
    deleteAlbum: (albumId:string) => Promise<void>
}