import { IFormValue } from "../entities/IFormValue";

export interface IAlbumServices {
    //getAlbums: () => Promise<void>
    //getAlbum: () => Promise<void>
    addAlbum: (addALbumForm: Array<IFormValue>) => Promise<void>
    //editAlbum: (albumId:string, editALbumForm: Array<IFormValue>) => Promise<void>
    //deleteAlbum: (albumId:string) => Promise<void>
}