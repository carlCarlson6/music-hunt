import React from 'react';
import { apolloClient } from "../../common/gql/Client";
import { userQuery } from "../../common/gql/queries/UserQueries";
import { GET_USER, FETCH_USER, CLOSE_SESSION } from "../../common/types/AuthTypes";
import { IUser } from '../../common/models/entities/IUser';

export const getLogedUserFn = (dispatch: React.Dispatch<any>) => {
    return async (): Promise<IUser> => {
        try {
            dispatch({type:FETCH_USER});
            const response = await apolloClient.query({query: userQuery});
            
            const user: IUser = response.data.me;
            dispatch({type:GET_USER, payload: user});
            
            return user;
        } catch(error) {
            console.log(error)
            dispatch({type:CLOSE_SESSION})
        }
    }
}