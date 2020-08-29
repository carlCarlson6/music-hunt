import { IUser } from "../entities/IUser";
import { IUserServices } from "../../../services/user/IUserServices";
import { IAuthState } from "../states/IAuthState";

export interface IUserController {
    state: IAuthState;
    userServices: IUserServices;
}