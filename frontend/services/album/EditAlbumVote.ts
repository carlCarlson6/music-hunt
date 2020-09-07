import {Dispatch} from 'react';
import { apolloClient } from '../../common/gql/Client';
import { updateVoteMutation } from '../../common/gql/queries/VoteQueries';
import { IAlbum } from '../../common/models/entities/IAlbum';
import { OK_EDIT, KO_EDIT, EDIT_ALBUM } from '../../common/types/AlbumTypes';

export const getEditAlbumVoteFn = (dispatch: Dispatch<any>) => {
    return async (voteId: string, isPositive: boolean) => {
        try {
            dispatch({type:EDIT_ALBUM});
            const response = await apolloClient.mutate({
                mutation: updateVoteMutation,
                variables: {voteId: voteId, isPositive: isPositive}
            })

            const album: IAlbum = response.data.updateVote;
            dispatch({type:OK_EDIT, payload:album});

            return album;
        } catch(error) {
            console.log(error);
            dispatch({type:KO_EDIT});
        }
    }
}