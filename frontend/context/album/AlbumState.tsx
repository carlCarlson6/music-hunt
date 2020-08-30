import React from "react";
import albumReducer from "./AlbumReducer";
import { albumInitialState } from "../../common/InitialStates";
import AlbumContext from "./AlbumContext";
import { getAddAlbumFn } from "../../services/album/AddAlbum";
import { getAlbumsFn } from "../../services/album/GetAlbums";

const AlbumState = props => {
    const [state, dispatch] = React.useReducer(albumReducer, albumInitialState);

    return (
        <AlbumContext.Provider
            value={{
                state,
                albumServices: {
                    addAlbum: getAddAlbumFn(dispatch),
                    getAlbums: getAlbumsFn(dispatch)
                }
            }}
        >
            {props.children}
        </AlbumContext.Provider>
    );
}

export default AlbumState;