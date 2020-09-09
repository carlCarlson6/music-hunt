import jwt from 'jsonwebtoken';
import { User } from '../../gql/entities/User';
import { auth_token_secret, auth_token_expire_time } from '../../dev_env_vars';

export const createAndSignJwt = (user: User): string => {
    const payload = {user: {id: user.id}};
    const token = jwt.sign(payload, auth_token_secret, {expiresIn: auth_token_expire_time});
    return token;
} 