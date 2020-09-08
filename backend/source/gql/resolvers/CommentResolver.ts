import { Resolver, Mutation, UseMiddleware } from "type-graphql";
import { logger } from "../middleware/logger";
import { isAuth } from "../middleware/isAuth";
import { Comment } from "../entities/Comment";

@Resolver()
export class CommentResolver {

    @Mutation(() => Comment)
    @UseMiddleware(logger, isAuth)
    async addComment(): Promise<Comment> {

    }

}