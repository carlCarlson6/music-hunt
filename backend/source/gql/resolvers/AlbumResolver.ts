import { Query, Resolver, UseMiddleware, Arg, Mutation, Ctx } from "type-graphql";
import { Album } from "../entities/Album";
import { isAuth } from "../middleware/isAuth";
import { AlbumInput } from "../inputTypes/AlbumInput";
import { AppContext } from "../../common/types/AppContext";
import { findAlbumById } from "../../common/utils/findAlbumById";
import { isAllowed } from "../middleware/isAllowed";
import { setAlbumToUpdate } from "../../common/utils/setAlbumDataToUpdate";

@Resolver()
export class AlbumResolver {
    
    @Query(()=>Album, {nullable:true})
    async album(@Arg('albumId') id: string): Promise<Album|undefined> {
        const album: Album|undefined = await Album.findOne(id);
        return album;
    }

    @Query(()=>[Album], {nullable:true})
    async albums(): Promise<Array<Album>> {
        const albums: Array<Album> = await Album.find();     
        if(albums.length === 0) return [];

        return albums;
    }

    @Mutation(()=>Album)
    @UseMiddleware(isAuth)
    async addAlbum(@Arg('data') {title, url, genre}: AlbumInput, @Ctx() context: AppContext): Promise<Album> {
        const votes: number = 0;
        const createdAt: Date = new Date();
        const userId: string = context.req.session!.userId;
        
        const album: Album = Album.create({title, genre, url, votes, userId, createdAt});
        await album.save();

        return album;
    }

    @Mutation(()=>Boolean)
    @UseMiddleware(isAuth, isAllowed)
    async deleteAlbum(@Arg('albumId') id: string): Promise<boolean> {
        try {
            await Album.delete({id});
            return true;
        } catch(error) { throw new Error(error.message); }
    }

    @Mutation(()=>Album)
    @UseMiddleware(isAuth, isAllowed)
    async updateAlbum(@Arg('id') id: string, @Arg('data') albumData: AlbumInput): Promise<Album> {
        const album: Album = await setAlbumToUpdate(id, albumData);
        await Album.update(id, album);
        return album;
    }

}