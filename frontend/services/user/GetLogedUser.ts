import React from 'react';
import { apolloClient } from "../../common/gql/Client";
import { userQuery } from "../../common/gql/queries/UserQueries";
import { GET_USER, FETCH_USER, CLOSE_SESSION } from "../../common/types/AuthTypes";

export const getLogedUserFn = (dispatch: React.Dispatch<any>) => {
    return async (): Promise<void> => {
        dispatch({type:FETCH_USER});
        
        try {
            const response = await apolloClient.query({
                query: userQuery
            })
            dispatch({type:GET_USER, payload: response.data.me})
        } catch(error) {
            console.log(error)
            dispatch({type:CLOSE_SESSION})
        }
    }
}