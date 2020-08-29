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
export const albumsQuery = gql`
    query {
        albums {
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

export const addAlbumMutation = gql`
    mutation AddAlbum($data: AlbumInput!) {
        addAlbum(data: $data) {
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

export const updateAlbumMutation = gql`
    mutation UpdateAlbum($id: String!, $data: AlbumInput!) {
        UpdateAlbum(id: $id, data: $data) {
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

export const delteAlbumMutation = gql`
    mutation DeleteAlbum($id: String!) {
        deleteAlbum(albumId: $id)
    }
`;