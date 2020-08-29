import { IFormValue } from "../../common/models/entities/IFormValue"
import React from 'react';
import { apolloClient } from "../../common/gql/Client";
import { reqisterMutation } from "../../common/gql/queries/UserQueries";
import { OK_SIGNUP, KO_SIGNUP } from "../../common/types/AuthTypes";
import Router from "next/router";
import { authTokenStorega } from "../../common/utils/AuthTokenStorage";
import { unpackCreateAccountFormValues } from "../../common/utils/unpackValues/unpackCreateAccount";

export const getSignInUserFn = (dispatch: React.Dispatch<any>) => {
    return async (loginInfo: Array<IFormValue>): Promise<void> => {
        const {email, password} = unpackCreateAccountFormValues(loginInfo);

        try {
            const response = await apolloClient.mutate({
                mutation: reqisterMutation,
                variables: {email: email.value, password: password.value}
            });

            authTokenStorega.AuthToken = response.data.register.authToken;
            dispatch({type:OK_SIGNUP, payload: response.data.register.user})

        } catch(error) {
            dispatch({type:KO_SIGNUP})
            console.log(error)
        }

        Router.push('/');
    }
}