import { MiddlewareFn } from "type-graphql";
import { AppContext } from "../../common/types/AppContext";
import { Album } from "../entities/Album";
import { findAlbumById } from "../../common/utils/findAlbumById";

export const isAllowed: MiddlewareFn<AppContext> = async ({ context, args }, next) => {
    const userId: string = context.req.session!.userId;
    const album: Album = await findAlbumById(args.id);
    
    if(userId === album.userId) {
        return next();
    } else {
        throw new Error('operation not allowed');
    }
}