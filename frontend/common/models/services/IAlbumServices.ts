import { IFormValue } from "../entities/IFormValue";
import { IAlbum } from "../entities/IAlbum";

export interface IAlbumServices {
    getAlbums: () => Promise<Array<IAlbum>>
    //getAlbum: () => Promise<void>
    addAlbum: (addALbumForm: Array<IFormValue>) => Promise<IAlbum>
    //editAlbum: (albumId:string, editALbumForm: Array<IFormValue>) => Promise<void>
    //deleteAlbum: (albumId:string) => Promise<void>
}