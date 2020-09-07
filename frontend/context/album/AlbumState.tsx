import React from "react";
import albumReducer from "./AlbumReducer";
import { albumInitialState } from "../../common/InitialStates";
import AlbumContext from "./AlbumContext";
import { getAddAlbumFn } from "../../services/album/AddAlbum";
import { getAlbumsFn } from "../../services/album/GetAlbums";
import { getAlbumFn } from "../../services/album/GetAlbum";
import { getEditAlbumFn } from "../../services/album/EditAlbum";
import { getVoteAlbumFn } from "../../services/album/VoteAlbum";
import { getEditAlbumVoteFn } from "../../services/album/EditAlbumVote";
import { getDeleteAlbumVoteFn } from "../../services/album/DeleteAlbumVote";

const AlbumState = props => {
    const [state, dispatch] = React.useReducer(albumReducer, albumInitialState);

    return (
        <AlbumContext.Provider
            value={{
                state,
                albumServices: {
                    addAlbum: getAddAlbumFn(dispatch),
                    getAlbums: getAlbumsFn(dispatch),
                    getAlbum: getAlbumFn(dispatch),
                    editAlbum: getEditAlbumFn(dispatch),
                    deleteAlbum: (albumId: string) => null,
                    voteAlbum: getVoteAlbumFn(dispatch),
                    editAlbumVote: getEditAlbumVoteFn(dispatch),
                    deleteAlbumVote: getDeleteAlbumVoteFn(dispatch)
                }
            }}
        >
            {props.children}
        </AlbumContext.Provider>
    );
}

export default AlbumState;