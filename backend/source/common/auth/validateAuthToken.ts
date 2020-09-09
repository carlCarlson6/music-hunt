import {verify} from 'jsonwebtoken' 
import { auth_token_secret } from '../../../env_vars';

export const validateAuthToken = (authToken: string) => {
    try {
        const encrypted: any = verify(authToken, auth_token_secret)
        return encrypted;
    } catch (error) {
        throw error;
    }
}