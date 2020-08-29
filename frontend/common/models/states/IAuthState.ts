import { IUser } from "../entities/IUser";

export interface IAuthState {
    user: IUser;
    fetchingUser: boolean;
}