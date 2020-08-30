import React from 'react';
import { CLOSE_SESSION } from "../../common/types/AuthTypes";
import { authTokenStorega } from '../../common/utils/AuthTokenStorage';
import Router from 'next/router';

export const getLogoutUserFn = (dispatch: React.Dispatch<any>) => {
    return (): void => {
        try {
            authTokenStorega.RemoveToken();
            dispatch({type:CLOSE_SESSION})
            Router.push('/login')
        } catch(error) {
            console.log(error)
        }
    }
}