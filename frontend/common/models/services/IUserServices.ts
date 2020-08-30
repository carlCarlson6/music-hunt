import { IFormValue } from "../entities/IFormValue";
import { IUser } from "../entities/IUser";

export interface IUserServices {
    login: (loginInfo: Array<IFormValue>) => Promise<IUser>
    getUser: () => Promise<IUser>
    logout: () => void,
    signIn: (signInInfo: Array<IFormValue>) => Promise<IUser>
}