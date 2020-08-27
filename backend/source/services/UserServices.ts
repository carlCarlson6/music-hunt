import { Album } from "../api/gql/entities/Album";

export const getUserAlbums = async (userId: string): Promise<Array<Album>> => {
    const albums = await Album.find({where: {userId}})
    return albums
}