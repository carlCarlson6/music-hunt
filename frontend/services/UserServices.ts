import { IFormValue } from "../common/models/entities/IFormValue";
import { unpackLoginFormValues } from "../common/utils/unpackValues/unpackLogin";
import Router from "next/router";
import { apolloClient } from "../common/gql/Client";
import { loginMutation } from "../common/gql/queries/UserQueries";

export const loginUser = async (loginInfo: Array<IFormValue>) => {
    const {email, password} = unpackLoginFormValues(loginInfo);


    const response = await apolloClient.mutate({
        mutation: loginMutation,
        variables: {email: email, password: password}
    })

    console.log(response);
    Router.push('/');
}