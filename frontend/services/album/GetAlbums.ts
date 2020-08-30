import React from 'react';
import { IAlbum } from '../../common/models/entities/IAlbum';
import { apolloClient } from '../../common/gql/Client';
import { albumsQuery } from '../../common/gql/queries/AlbumQueries';
import { GET_ALBUMS, OK_ALBUMS } from '../../common/types/AlbumTypes';

export const getAlbumsFn = (dispatch: React.Dispatch<any>) => {
    return async (): Promise<Array<IAlbum>> => {
        try {
            dispatch({type:GET_ALBUMS});
            const response = await apolloClient.query({query: albumsQuery});
            
            const albums: Array<IAlbum> = response.data.albums;
            dispatch({type: OK_ALBUMS, payload: albums});
            
            return albums;
        } catch(error) {
            console.log(error.message)
            dispatch({type:OK_ALBUMS})
        }
    }
}