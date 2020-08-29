import { IFormValue } from "../common/models/entities/IFormValue";
import { unpackLoginFormValues } from "../common/utils/unpackValues/unpackLogin";
import Router from "next/router";
import { apolloClient } from "../common/gql/Client";
import { loginMutation, userQuery } from "../common/gql/queries/UserQueries";
import { OK_LOGIN, GET_USER } from "../common/types/AuthTypes";
import React from 'react';


export class UserServices {
    
    constructor(private dispatch: React.Dispatch<any>) { }

    async LoginUser(loginInfo: Array<IFormValue>): Promise<void> {
        const {email, password} = unpackLoginFormValues(loginInfo);

        try {
            const response = await apolloClient.mutate({
                mutation: loginMutation,
                variables: {email: email.value, password: password.value}
            });

            this.dispatch({type:OK_LOGIN, payload: response.data.login})

        } catch(error) {
            console.log(error)
        }

        Router.push('/');
    }

    async GetLogedUser(): Promise<void> {
        try {
            const response = await apolloClient.query({
                query: userQuery
            })
           this.dispatch({type:GET_USER, payload: response.data.me})
        } catch(error) {
            console.log(error)
        }
    
        Router.push('/');
    }

} 
