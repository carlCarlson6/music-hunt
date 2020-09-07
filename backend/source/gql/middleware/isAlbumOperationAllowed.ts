import { MiddlewareFn } from "type-graphql";
import { AppContext } from "../../common/AppContext";
import { Album } from "../entities/Album";
import { findAlbumById } from "../../common/utils/findAlbumById";

export const isAlbumOperationAllowed: MiddlewareFn<AppContext> = async ({ context, args }, next) => {
    const userId: string = context.userId;
    const album: Album = await findAlbumById(args.id);
    
    if(userId === album.userId) {
        return next();
    } else {
        throw new Error('operation not allowed');
    }
}