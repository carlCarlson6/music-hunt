import { IFormValue } from "../../common/models/entities/IFormValue"
import React from 'react';
import { apolloClient } from "../../common/gql/Client";
import { reqisterMutation } from "../../common/gql/queries/UserQueries";
import { OK_SIGNUP, KO_SIGNUP, FETCH_USER } from "../../common/types/AuthTypes";
import Router from "next/router";
import { authTokenStorega } from "../../common/utils/AuthTokenStorage";
import { unpackCreateAccountFormValues } from "../../common/utils/unpackValues/unpackCreateAccount";
import { IUser } from "../../common/models/entities/IUser";

export const getSignInUserFn = (dispatch: React.Dispatch<any>) => {
    return async (signInInfo: Array<IFormValue>): Promise<IUser> => {
        try {
            const {email, password} = unpackCreateAccountFormValues(signInInfo);
            dispatch({type:FETCH_USER});

            const response = await apolloClient.mutate({
                mutation: reqisterMutation,
                variables: {email: email.value, password: password.value}
            });

            const user: IUser = response.data.register.user;
            authTokenStorega.AuthToken = response.data.register.authToken;
            
            Router.push('/');
            dispatch({type:OK_SIGNUP, payload: user});
            
            return user;
        } catch(error) {
            dispatch({type:KO_SIGNUP})
            console.log(error)
        }
    }
}