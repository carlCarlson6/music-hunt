import React from 'react';
import { IFormValue } from '../../common/models/entities/IFormValue';
import { unpackNewAlbumFormValues } from '../../common/utils/unpackValues/unpackNewAlbum';
import { ADD_ALBUM, OK_ADD, KO_ADD } from '../../common/types/AlbumTypes';
import { apolloClient } from '../../common/gql/Client';
import { addAlbumMutation } from '../../common/gql/queries/AlbumQueries';
import Router from 'next/router';
import { IAlbum } from '../../common/models/entities/IAlbum';

export const getAddAlbumFn = (dispatch: React.Dispatch<any>) => {
    return async (addAlbumForm: Array<IFormValue>): Promise<IAlbum> => {
        try {
            const {artist, genre, title, url} = unpackNewAlbumFormValues(addAlbumForm);
            dispatch({type: ADD_ALBUM});

            const response = await apolloClient.mutate({
                mutation: addAlbumMutation,
                variables: {title:title.value, artist:artist.value, genre:genre.value, url:url.value}
            });
            const album: IAlbum = response.data.addAlbum;
            
            Router.push('/');
            dispatch({type:OK_ADD})
            
            return album;      
        } catch(error) {
            console.log(error);
            dispatch({type:KO_ADD})
        }
    }
}