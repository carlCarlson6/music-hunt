import { IUser } from "../../common/models/entities/IUser";
import React from 'react';
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import { getLoginUserFn } from "../../services/user/LoginUser";
import { getLogedUserFn } from "../../services/user/GetLogedUser";
import { getLogoutUserFn } from "../../services/user/LogoutUser";
import { getSignInUserFn } from "../../services/user/SignInUser";

const AuthState = props => {
    const initialState: IUser = { id: null, email: null }

    const [state, dispatch] = React.useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                user: {
                    id: state.id,
                    email: state.email
                },
                userServices: {
                    login: getLoginUserFn(dispatch),
                    getUser: getLogedUserFn(dispatch),
                    logout: getLogoutUserFn(dispatch),
                    signIn: getSignInUserFn(dispatch)
                }
            }}
        >
            {props.children}
        </ AuthContext.Provider>
    );
}

export default AuthState;