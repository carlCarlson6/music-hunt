import { Dispatch } from 'react';
import { IFormValue } from '../../common/models/entities/IFormValue';
import { apolloClient } from '../../common/gql/Client';
import { updateAlbumMutation } from '../../common/gql/queries/AlbumQueries';
import { IAlbum } from '../../common/models/entities/IAlbum';
import { unpackAlbumValues } from '../../common/utils/unpackValues/unpackAlbumValues';
import { EDIT_ALBUM, KO_EDIT, OK_EDIT } from '../../common/types/AlbumTypes';

export const getEditAlbumFn = (dispatch: Dispatch<any>) => {
    return async (albumId:string, editALbumForm: Array<IFormValue>) => {
        try {
            dispatch({type:EDIT_ALBUM});
            const albumInputData = unpackAlbumValues(editALbumForm);
        
            const response = await apolloClient.mutate({
                mutation: updateAlbumMutation,
                variables: {id: albumId, data: albumInputData}
            });
            const album: IAlbum = response.data.updateAlbum;

            dispatch({type:OK_EDIT, payload:album})

            return album;
        } catch(error) {
            console.log(error);
            dispatch({type:KO_EDIT});
        }
    }
}