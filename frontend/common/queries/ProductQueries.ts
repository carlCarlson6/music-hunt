import {gql} from '@apollo/client';

export const albumQuery = gql`
    query AlbumInfo(albumId: String!) {
        album(albumId: $albumId) {
            id
            title
            genre
            url
            votes
            user {
                id
            }
        }
    }
`;