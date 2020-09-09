import { Resolver, Mutation, UseMiddleware, Arg, Ctx } from "type-graphql";
import { logger } from "../middleware/logger";
import { isAuth } from "../middleware/isAuth";
import { Comment } from "../entities/Comment";
import { CommentInput } from "../inputTypes/CommentInput";
import { Album } from "../entities/Album";
import { findAlbumById } from "../../common/utils/findAlbumById";
import { AppContext } from "../../common/AppContext";

@Resolver()
export class CommentResolver {

    @Mutation(() => Album)
    @UseMiddleware(logger, isAuth)
    async addComment(@Arg('data') {albumId, text}: CommentInput, @Ctx() {userId}: AppContext): Promise<Album> {
        const createdAt: Date = new Date();
        const comment: Comment = Comment.create({userId, albumId, createdAt, text});
        await comment.save();

        const album: Album = await findAlbumById(albumId)
        return album;
    }

}