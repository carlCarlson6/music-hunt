import React from "react";
import albumReducer from "./AlbumReducer";
import { albumInitialState } from "../../common/InitialStates";
import AlbumContext from "./AlbumContext";
import { getAddAlbumFn } from "../../services/album/AddAlbum";
import { getAlbumsFn } from "../../services/album/GetAlbums";
import { getAlbumFn } from "../../services/album/GetAlbum";
import { getEditAlbumFn } from "../../services/album/EditAlbum";

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
                    editAlbum: getEditAlbumFn(dispatch)
                }
            }}
        >
            {props.children}
        </AlbumContext.Provider>
    );
}

export default AlbumState;