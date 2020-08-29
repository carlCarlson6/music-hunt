import { Resolver, Mutation, Arg, Ctx, Query, UseMiddleware } from "type-graphql";
import { User } from "../entities/User";
import { UserInput } from "../inputTypes/UserInput";
import { hash } from 'bcryptjs' 
import { AppContext } from "../../common/types/AppContext";
import { isAuth } from "../middleware/isAuth";
import { validatePassword } from "../../common/auth/validatePassword";
import { logger } from "../middleware/logger";
import { LoginUser } from "../entities/LoginUser";
import { createAndSignJwt } from "../../common/auth/createAndSignJwt";

@Resolver()
export class UserResolver {
    
    @Mutation(() => LoginUser)
    @UseMiddleware(logger)
    async register(@Arg('data') {email, password}: UserInput, @Ctx() context: AppContext): Promise<LoginUser> {
        const hashedPassword = await hash(password, 10);

        const user: User = User.create({ email, password: hashedPassword, createdAt: new Date() });
        await user.save();

        const authToken: string = createAndSignJwt(user);

        return {user, authToken};
    }

    @Mutation(() => LoginUser)
    @UseMiddleware(logger)
    async login(@Arg('data') {email, password}: UserInput, @Ctx() context: AppContext): Promise<LoginUser | null> {
        const user = await User.findOne({where:{email}});
        if(!user) { return null }

        await validatePassword(password, user.password);

        const authToken: string = createAndSignJwt(user);

        return {user, authToken};
    }

    //@UseMiddleware(logger)
    //@Mutation(() => Boolean)
    //async logout(@Ctx() context: AppContext): Promise<Boolean> {
    //    return new Promise((resolve, reject) => context.req.session!.destroy((err) => {
    //        if(err){
    //            console.log(err);
    //            return reject(false);
    //        }
    //        context.res.clearCookie('musichunt-cookie');
    //        return resolve(true);
    //    }));
    //}

    @Query(() => User, {nullable: true})
    @UseMiddleware(isAuth, logger)
    async me(@Ctx() context: AppContext): Promise<User | undefined> {
        const user = await User.findOne(context.userId);
        return user;
    }

}