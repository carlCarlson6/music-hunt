import { AppContext } from "../types/AppContext";

export const readAuthToken = (context: AppContext) => {
    const authToken = context.req.headers.authorization;
    console.log(authToken);
    if(!authToken) {
        throw new Error('no token')
    }
    return authToken;
}