import {Dispatch} from 'react';
import { apolloClient } from '../../common/gql/Client';
import { createVoteMutation } from '../../common/gql/queries/VoteQueries';
import { IAlbum } from '../../common/models/entities/IAlbum';
import { OK_EDIT, EDIT_ALBUM, KO_EDIT } from '../../common/types/AlbumTypes';

export const getVoteAlbumFn = (dispatch: Dispatch<any>) => {
    return async (albumId:string, isPositive: boolean) => {
        try {
            dispatch({type:EDIT_ALBUM});
            const response = await apolloClient.mutate({
                mutation: createVoteMutation,
                variables: {albumId:albumId, isPositive:isPositive}
            });

            const album: IAlbum = response.data.createVote;
            dispatch({type:OK_EDIT, payload:album});

            return album;
        } catch (error) {
            console.log(error);
            dispatch({type:KO_EDIT});
        }
    }
} 