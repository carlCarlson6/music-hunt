import { IUser } from "../../common/models/entities/IUser";
import React from 'react';
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import { getLoginUserFn } from "../../services/user/LoginUser";
import { getLogedUserFn } from "../../services/user/GetLogedUser";

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
                    getUser: getLogedUserFn(dispatch)
                }
            }}
        >
            {props.children}
        </ AuthContext.Provider>
    );
}

export default AuthState;