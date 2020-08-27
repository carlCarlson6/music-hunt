import { findAlbumById } from "./findAlbumById";
import { AlbumInput } from "../../gql/inputTypes/AlbumInput";
import { Album } from "../../gql/entities/Album";

export const setAlbumToUpdate = async (id: string, albumData: AlbumInput): Promise<Album> => {
    const album: Album = await findAlbumById(id);
    let albumDataEntry: keyof AlbumInput
    
    for(albumDataEntry in albumData) {
        album[albumDataEntry] = albumData[albumDataEntry] as never
    }
    album.updatedAt = new Date();

    return album;
}