import React from 'react';
import { IAlbumController } from '../../common/models/controllers/IAlbumController';

const AlbumContext = React.createContext<IAlbumController>(null);

export default AuthContext;