import React from 'react';
import { IFormValue } from '../../common/models/entities/IFormValue';
import { unpackNewAlbumFormValues } from '../../common/utils/unpackValues/unpackNewAlbum';
import { ADD_ALBUM, OK_ADD, KO_ADD } from '../../common/types/AlbumTypes';
import { apolloClient } from '../../common/gql/Client';
import { addAlbumMutation } from '../../common/gql/queries/ProductQueries';
import Router from 'next/router';

export const getAddAlbumFn = (dispatch: React.Dispatch<any>) => {
    return async (addAlbumForm: Array<IFormValue>): Promise<void> => {
        const {artist, genre, title, url} = unpackNewAlbumFormValues(addAlbumForm);
        dispatch({type: ADD_ALBUM});
        console.log({artist, genre, title, url});
        console.log(addAlbumMutation);
        try {
            const response = await apolloClient.mutate({
                mutation: addAlbumMutation,
                variables: {title:title.value, artist:artist.value, genre:genre.value, url:url.value}
            });
            console.log(response);
            dispatch({type:OK_ADD, payload: response.data.addAlbum})

        } catch(error) {
            console.log(error.message);
            dispatch({type:KO_ADD})
        }
    
        Router.push('/');
    }
}