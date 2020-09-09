import { gql } from "@apollo/client";

export const addCommentMutation = gql`
    mutation AddComment(albumId: String!, text: String!) {
        addComment(data: {albumId: $albumId, text: $text}) {
            id
            title
            artist
            genre
            url
            votes {
                id
                isPositive
                user { id email }
            }
            user { id email }
            comments {
                id
                text
                user { id email }
            }
        }
    }
`;