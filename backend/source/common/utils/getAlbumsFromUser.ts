import { Album } from "../../gql/entities/Album"

export const getAlbumsFromUser = async (userId: string): Promise<Array<Album>> => {
    const albums = await Album.find({where: {userId}})
    return albums
}