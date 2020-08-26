import { Resolver, Mutation, Arg, Ctx, Query, UseMiddleware } from "type-graphql";
import { User } from "../entities/User";
import { UserInput } from "../entities/UserInput";
import { hash, compare } from 'bcryptjs' 
import { MyContext } from "../../../common/types/MyContext";
import { isAuth } from "../middleware/isAuth";

@Resolver()
export class UserResolver {
    
    @Mutation(() => User)
    async register(@Arg('data') {email, password}: UserInput): Promise<User> {
        const hashedPassword = await hash(password, 10);

        const user = User.create({ email, password: hashedPassword });
        await user.save();

        return user;
    }

    @Mutation(() => User, {nullable: true})
    async login(@Arg('data') {email, password}: UserInput, @Ctx() context: MyContext): Promise<User | null> {
        const user = await User.findOne({where: {email}});
        if(!user) { return null }

        const validPassword = await compare(password, user.password);
        if(!validPassword) { return null }

        context.req.session!.userId = user.id;
        return user;
    }

    @Mutation(() => Boolean)
    async logout(@Ctx() context: MyContext): Promise<Boolean> {
        return new Promise((resolve, reject) => context.req.session!.destroy((err) => {
            if(err){
                console.log(err);
                return reject(false);
            }
            context.res.clearCookie('musichunt-cookie');
            return resolve(true);
        }));
    }

    @Query(() => User, {nullable: true})
    @UseMiddleware(isAuth)
    async me(@Ctx() context: MyContext): Promise<User | undefined> {
        const user = await User.findOne(context.req.session!.userId);
        return user;
    }

}