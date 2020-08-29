import { IFormValue } from "../../common/models/entities/IFormValue"
import React from 'react';
import { unpackLoginFormValues } from "../../common/utils/unpackValues/unpackLogin";
import { apolloClient } from "../../common/gql/Client";
import { loginMutation } from "../../common/gql/queries/UserQueries";
import { OK_LOGIN, KO_LOGIN } from "../../common/types/AuthTypes";
import Router from "next/router";
import { authTokenStorega } from "../../common/utils/AuthTokenStorage";

export const getLoginUserFn = (dispatch: React.Dispatch<any>) => {
    return async (loginInfo: Array<IFormValue>): Promise<void> => {
        const {email, password} = unpackLoginFormValues(loginInfo);

        try {
            const response = await apolloClient.mutate({
                mutation: loginMutation,
                variables: {email: email.value, password: password.value}
            });

            authTokenStorega.AuthToken = response.data.login.authToken;
            dispatch({type:OK_LOGIN, payload: response.data.login.user})

        } catch(error) {
            dispatch({type:KO_LOGIN})
            console.log(error)
        }

        Router.push('/');
    }
}