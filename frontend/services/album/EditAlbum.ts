import { Dispatch } from 'react';
import { IFormValue } from '../../common/models/entities/IFormValue';
import { apolloClient } from '../../common/gql/Client';
import { updateAlbumMutation } from '../../common/gql/queries/AlbumQueries';
import { IAlbum } from '../../common/models/entities/IAlbum';
import { unpackAlbumValues } from '../../common/utils/unpackValues/unpackAlbumValues';

export const getEditAlbumFn = (dispatch: Dispatch<any>) => {
    return async (albumId:string, editALbumForm: Array<IFormValue>) => {
        console.log('voting')

        let albumInputData = unpackAlbumValues(editALbumForm);
        console.log(albumInputData);

        try {

            const response = await apolloClient.mutate({
                mutation: updateAlbumMutation,
                variables: {albumId, data: albumInputData }
            });
            let album: IAlbum;

            console.log(response);

            return album;

        } catch(error) {
            console.log(error);
        }
    }
}