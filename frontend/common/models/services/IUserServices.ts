import { IFormValue } from "../entities/IFormValue";

export interface IUserServices {
    login: (loginInfo: Array<IFormValue>) => Promise<void>
    getUser: () => Promise<void>
    logout: () => void,
    signIn: (signInInfo: Array<IFormValue>) => Promise<void>
}