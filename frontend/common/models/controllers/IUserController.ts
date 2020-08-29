import { IUserServices } from "../services/IUserServices";
import { IAuthState } from "../states/IAuthState";

export interface IUserController {
    state: IAuthState;
    userServices: IUserServices;
}