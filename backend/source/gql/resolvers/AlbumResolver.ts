import { Query, Resolver, UseMiddleware, Arg, Mutation, Ctx } from "type-graphql";
import { Album } from "../entities/Album";
import { isAuth } from "../middleware/isAuth";
import { AlbumInput } from "../inputTypes/AlbumInput";
import { AppContext } from "../../common/AppContext";
import { isAlbumOperationAllowed } from "../middleware/isAlbumOperationAllowed";
import { setAlbumToUpdate } from "../../common/utils/setAlbumDataToUpdate";
import { logger } from "../middleware/logger";

@Resolver()
export class AlbumResolver {
    
    @Query(()=>Album, {nullable:true})
    @UseMiddleware(logger)
    async album(@Arg('albumId') id: string): Promise<Album|undefined> {
        const album: Album|undefined = await Album.findOne(id);
        console.log(album);
        return album;
    }

    @Query(()=>[Album], {nullable:true})
    @UseMiddleware(logger)
    async albums(): Promise<Array<Album>> {
        const albums: Array<Album> = await Album.find({order: {createdAt:"DESC"}});     
        if(albums.length === 0) return [];

        return albums;
    }

    @Mutation(()=>Album)
    @UseMiddleware(isAuth, logger)
    async addAlbum(@Arg('data') {title, url, genre, artist}: AlbumInput, @Ctx() {userId}: AppContext): Promise<Album> {
        const createdAt: Date = new Date();
        
        const album: Album = Album.create({title, artist, genre, url, userId, createdAt});       
        await album.save();
        
        return album;
    }

    @Mutation(()=>Boolean)
    @UseMiddleware(isAuth, isAlbumOperationAllowed, logger)
    async deleteAlbum(@Arg('albumId') id: string): Promise<boolean> {
        try {
            await Album.delete({id});
            return true;
        } catch(error) { throw new Error(error.message); }
    }

    @Mutation(()=>Album)
    @UseMiddleware(isAuth, isAlbumOperationAllowed, logger)
    async updateAlbum(@Arg('id') id: string, @Arg('data') albumData: AlbumInput): Promise<Album> {
        const album: Album = await setAlbumToUpdate(id, albumData);
        await Album.update(id, album);
        return album;
    }

}