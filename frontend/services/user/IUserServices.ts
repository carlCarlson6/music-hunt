import { IFormValue } from "../../common/models/entities/IFormValue";

export interface IUserServices {
    login: (loginInfo: Array<IFormValue>) => Promise<void>
    getUser: () => Promise<void>
}