import { IFormValue } from "../../common/models/entities/IFormValue"
import React from 'react';
import { unpackLoginFormValues } from "../../common/utils/unpackValues/unpackLogin";
import { apolloClient } from "../../common/gql/Client";
import { loginMutation } from "../../common/gql/queries/UserQueries";
import { OK_LOGIN } from "../../common/types/AuthTypes";
import Router from "next/router";

export const getLoginUserFn = (dispatch: React.Dispatch<any>) => {
    return async (loginInfo: Array<IFormValue>): Promise<void> => {
        const {email, password} = unpackLoginFormValues(loginInfo);

        try {
            const response = await apolloClient.mutate({
                mutation: loginMutation,
                variables: {email: email.value, password: password.value}
            });

            console.log(response);        
            dispatch({type:OK_LOGIN, payload: response.data.login})

        } catch(error) {
            console.log(error)
        }

        Router.push('/');
    }
}