import { IUser } from "../../common/models/entities/IUser";
import React from 'react';
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import { getLoginUserFn } from "../../services/user/LoginUser";
import { getLogedUserFn } from "../../services/user/GetLogedUser";
import { getLogoutUserFn } from "../../services/user/LogoutUser";
import { getSignInUserFn } from "../../services/user/SignInUser";
import { IAuthState } from "../../common/models/states/IAuthState";

const AuthState = props => {
    const initialState: IAuthState = { 
        user: {id: null, email: null},
        fetchingUser: false
    }

    const [state, dispatch] = React.useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                state,
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