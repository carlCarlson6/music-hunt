import { gql } from "@apollo/client";

export const CreateVote = gql`
    mutation CreateVote($albumId: String!, $isPositive: Boolean!) {
        createVote(albumId: $albumId, isPositive:$isPositive) {
            id
            user {id}
            isPositive
            album {id}
        }
    }
`;

export const UpdateVote = gql`
    mutation UpdateVote($voteId: String!, $isPositive: Boolean!) {
        updateVote(voteId: $voteId, isPositive: $isPositive) {
            id
            user {id}
            isPositive
            album {id}
        }
    }
`;

export const DeleteVote = gql`
    DeleteVote() {
        deleteVote()
    }
`;