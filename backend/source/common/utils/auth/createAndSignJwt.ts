import jwt from 'jsonwebtoken';
import { User } from '../../../gql/entities/User';

export const createAndSignJwt = (user: User): string => {
    const payload = {user: {id: user.id}};
    const token = jwt.sign(payload, 'SECRET_WORD', {expiresIn: 7200})
    return token;
} 