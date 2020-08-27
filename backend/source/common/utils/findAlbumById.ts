import { Album } from "../../gql/entities/Album"

export const findAlbumById = async (id: string): Promise<Album> => {
    const album: Album|undefined = await Album.findOne(id);
    if(!album) {
        throw new Error('error while finding the album')
    }

    return album;
}
