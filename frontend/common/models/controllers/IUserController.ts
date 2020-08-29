import { IUser } from "../entities/IUser";
import { IUserServices } from "../../../services/user/IUserServices";

export interface IUserController {
    user: IUser;
    userServices: IUserServices;
}