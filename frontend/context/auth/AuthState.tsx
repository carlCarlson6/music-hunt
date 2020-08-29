import React from 'react';
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import { getLoginUserFn } from "../../services/user/LoginUser";
import { getLogedUserFn } from "../../services/user/GetLogedUser";
import { getLogoutUserFn } from "../../services/user/LogoutUser";
import { getSignInUserFn } from "../../services/user/SignInUser";
import { authInitialState } from '../../common/InitialStates';

const AuthState = props => {
    const [state, dispatch] = React.useReducer(authReducer, authInitialState);

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