import { IUser } from "../entities/IUser";
import { UserServices } from "../../../services/UserServices";

export interface IUserController {
    user: IUser;
    userServices: UserServices;
}