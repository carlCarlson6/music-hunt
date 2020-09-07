import { AppContext } from "../AppContext";

export const readAuthToken = (context: AppContext) => {
    const authToken = context.req.headers.authorization;
    if(!authToken) {
        throw new Error('no token')
    }
    return authToken;
}