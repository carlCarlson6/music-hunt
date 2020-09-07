import { gql } from "@apollo/client";

export const createVoteMutation = gql`
    mutation CreateVote($albumId: String!, $isPositive: Boolean!) {
        createVote(albumId: $albumId, isPositive:$isPositive) {
            id
            title
            artist
            genre
            url
            votes {
                id
                isPositive
                user { id email }
                album { id }
            }
            user { id email }
        }
    }
`;

export const updateVoteMutation = gql`
    mutation UpdateVote($voteId: String!, $isPositive: Boolean!) {
        updateVote(voteId: $voteId, isPositive: $isPositive) {
            id
        }
    }
`;

export const deleteVoteMutation = gql`
    mutation DeleteVote($voteId: String!) {
        deleteVote(voteId: $voteId)
    }
`;