import { MiddlewareFn } from "type-graphql";
import { AppContext } from "../../common/types/AppContext";

export const isAuth: MiddlewareFn<AppContext> = async ({ context }, next) => {
    const userAuth: boolean = !!context.req.session!.userId;
    if(!userAuth) {
        throw new Error('not authenticated');
    }
    
    return next();
}