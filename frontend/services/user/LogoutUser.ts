import React from 'react';
import { CLOSE_SESSION } from "../../common/types/AuthTypes";
import { authTokenStorega } from '../../common/utils/AuthTokenStorage';

export const getLogoutUserFn = (dispatch: React.Dispatch<any>) => {
    return (): void => {
        try {
            authTokenStorega.RemoveToken()
            dispatch({type:CLOSE_SESSION})
        } catch(error) {
            console.log(error)
        }
    }
}