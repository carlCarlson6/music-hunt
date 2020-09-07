import {Dispatch} from 'react';
import { apolloClient } from '../../common/gql/Client';
import { deleteVoteMutation } from '../../common/gql/queries/VoteQueries';
import { IAlbum } from '../../common/models/entities/IAlbum';
import { OK_EDIT, KO_EDIT, EDIT_ALBUM } from '../../common/types/AlbumTypes';

export const getDeleteAlbumVoteFn = (dispatch: Dispatch<any>) => {
    return async (voteId: string) => {
        try {
            dispatch({type:EDIT_ALBUM});
            const response = await apolloClient.mutate({
                mutation: deleteVoteMutation,
                variables: {voteId: voteId}
            })

            const album: IAlbum = response.data.deleteVote;
            dispatch({type:OK_EDIT, payload:album});

            return album;
        } catch(error) {
            console.log(error);
            dispatch({type:KO_EDIT});
        }
    }
}