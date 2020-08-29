import { IUser } from "../../common/models/entities/IUser";
import React from 'react';
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import { UserServices } from "../../services/UserServices";

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
                userServices: new UserServices(dispatch)
            }}
        >
            {props.children}
        </ AuthContext.Provider>
    );
}

export default AuthState;