import React from 'react';
import { IAlbum } from '../../common/models/entities/IAlbum';
import { apolloClient } from '../../common/gql/Client';
import { albumQuery } from '../../common/gql/queries/AlbumQueries';
import { GET_ALBUM, OK_ALBUM, KO_ALBUM } from '../../common/types/AlbumTypes';

export const getAlbumFn = (dispatch: React.Dispatch<any>) => {
    return async (albumId: string): Promise<IAlbum> => {
        try {
            dispatch({type:GET_ALBUM});
            const response = await apolloClient.query({query: albumQuery, variables:{albumId}});
            
            const album: IAlbum = response.data.album;
            dispatch({type: OK_ALBUM, payload: album});
            
            return album;
        } catch(error) {
            console.log(error.message)
            dispatch({type:KO_ALBUM})
        }
    }
}