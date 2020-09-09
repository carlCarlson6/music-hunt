import {Dispatch} from 'react';
import { IAlbum } from '../../common/models/entities/IAlbum';
import { apolloClient } from '../../common/gql/Client';
import { addCommentMutation } from '../../common/gql/queries/CommentQueries';
import { EDIT_ALBUM, OK_EDIT, KO_EDIT } from '../../common/types/AlbumTypes';

export const getCommentAlbumFn = (dispatch: Dispatch<any>) => {
    return async (albumId: string, text: string): Promise<IAlbum> => {
        try {
            dispatch({type:EDIT_ALBUM});

            const response = await apolloClient.mutate({
                mutation: addCommentMutation,
                variables: {albumId: albumId, text: text}
            });
            const album: IAlbum = response.data.addComment;

            dispatch({type:OK_EDIT, payload:album});
            return album;
        } catch(error) { 
            console.log(error);
            dispatch({type:KO_EDIT});
        }
    }
}