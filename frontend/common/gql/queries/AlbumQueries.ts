import {gql} from '@apollo/client';

export const albumQuery = gql`
    query AlbumInfo($albumId: String!) {
        album(albumId: $albumId) {
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
        }
    }
`;
export const albumsQuery = gql`
    query {
        albums {
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
        }
    }
`;

export const addAlbumMutation = gql`
    mutation AddAlbum($title: String!, $artist: String!, $genre: String!, $url: String!) {
        addAlbum(data: {title:$title, artist:$artist, genre:$genre, url:$url}) {
            id
        }
    }
`;

export const updateAlbumMutation = gql`
    mutation UpdateAlbum($id: String!, $data: AlbumInput!) {
        updateAlbum(id: $id, data: $data) {
            id        
        }
    }
`;

export const delteAlbumMutation = gql`
    mutation DeleteAlbum($id: String!) {
        deleteAlbum(albumId: $id)
    }
`;