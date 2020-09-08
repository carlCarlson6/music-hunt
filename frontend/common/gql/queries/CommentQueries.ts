import { gql } from "@apollo/client";

export const addCommentMutation = gql`
    mutation AddComment($userId: String!, albumId: String!, text: String!) {
        addComment(data: {userId: $userId, albumId: $albumId, text: $text}) {
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