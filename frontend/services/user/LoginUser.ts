import { IFormValue } from "../../common/models/entities/IFormValue"
import React from 'react';
import { unpackLoginFormValues } from "../../common/utils/unpackValues/unpackLogin";
import { apolloClient } from "../../common/gql/Client";
import { loginMutation } from "../../common/gql/queries/UserQueries";
import { OK_LOGIN, KO_LOGIN, FETCH_USER } from "../../common/types/AuthTypes";
import Router from "next/router";
import { authTokenStorega } from "../../common/utils/AuthTokenStorage";
import { IUser } from "../../common/models/entities/IUser";

export const getLoginUserFn = (dispatch: React.Dispatch<any>) => {
    return async (loginInfo: Array<IFormValue>): Promise<IUser> => {
        try {
            const {email, password} = unpackLoginFormValues(loginInfo);
            dispatch({type:FETCH_USER});

            const response = await apolloClient.mutate({
                mutation: loginMutation,
                variables: {email: email.value, password: password.value}
            });
            
            const user: IUser = response.data.login.user;
            authTokenStorega.AuthToken = response.data.login.authToken;
            
            Router.push('/');
            dispatch({type:OK_LOGIN, payload: user})
            
            return user;   
        } catch(error) {
            dispatch({type:KO_LOGIN})
            console.log(error)
        }

    }
}