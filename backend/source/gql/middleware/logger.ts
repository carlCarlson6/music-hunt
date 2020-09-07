import { MiddlewareFn } from "type-graphql";
import { AppContext } from "../../common/AppContext";

export const logger: MiddlewareFn<AppContext> = async ({ args, info }, next) => {
    console.log('new execution at: ', new Date());
    console.log('args:', args);
    console.log('info:', info.path);

    return next();
}