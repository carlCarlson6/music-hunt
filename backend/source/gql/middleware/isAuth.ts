import { MiddlewareFn } from "type-graphql";
import { AppContext } from "../../common/types/AppContext";
import { readAuthToken } from "../../common/utils/auth/readAuthToken";
import { validateAuthToken } from "../../common/utils/auth/validateAuthToken";

export const isAuth: MiddlewareFn<AppContext> = async ({ context }, next) => {
    const encryptedAuthToken: string = readAuthToken(context);
    const decodedAuthToken = validateAuthToken(encryptedAuthToken);
    context.userId = decodedAuthToken.user.id
    
    return next();
}