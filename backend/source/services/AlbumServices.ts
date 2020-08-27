import { User } from "../api/gql/entities/User";

export const getAlbumByUser = async (userId: string) => {
    const user = await User.findOne(userId);
    if(!user) {throw new Error('error while finding the user')}
    
    return user;
}
