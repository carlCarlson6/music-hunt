import { User } from "../../gql/entities/User";

export const findUserById = async (userId: string) => {
    const user = await User.findOne(userId);
    if(!user) {throw new Error('error while finding the user')}
    
    return user;
}
