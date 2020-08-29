import {verify} from 'jsonwebtoken' 

export const validateAuthToken = (authToken: string) => {
    try {
        const encrypted: any = verify(authToken, 'SECRET_WORD')
        return encrypted;
    } catch (error) {
        throw error;
    }
}