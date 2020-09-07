import { MiddlewareFn } from "type-graphql";
import { AppContext } from "../../common/AppContext";
import { readAuthToken } from "../../common/auth/readAuthToken";
import { validateAuthToken } from "../../common/auth/validateAuthToken";

export const isAuth: MiddlewareFn<AppContext> = async ({ context }, next) => {
    const encryptedAuthToken: string = readAuthToken(context);
    const decodedAuthToken = validateAuthToken(encryptedAuthToken);
    context.userId = decodedAuthToken.user.id
    
    return next();
}