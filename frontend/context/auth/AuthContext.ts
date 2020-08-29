import React from 'react';
import { IUserController } from '../../common/models/controllers/IUserController';

const AuthContext = React.createContext<IUserController>(null);

export default AuthContext;