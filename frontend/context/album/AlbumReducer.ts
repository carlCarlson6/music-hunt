import { ADD_ALBUM, OK_ADD, GET_ALBUMS, OK_ALBUMS, GET_ALBUM, OK_ALBUM, EDIT_ALBUM, OK_EDIT, KO_ADD, KO_EDIT, KO_ALBUM } from "../../common/types/AlbumTypes";

const albumReducer = (state, action) => {
    switch(action.type) {
        case ADD_ALBUM:
        case GET_ALBUMS:
        case GET_ALBUM:
        case EDIT_ALBUM:
            return {...state, fetchingData: true};
        
        case OK_ADD:
            return {...state, 
                fetchingData: false,
            }

        case OK_ALBUMS:
            return {...state, 
                fetchingData: false,
                albums: action.payload
            }
        
        case OK_ALBUM:
        case OK_EDIT:
            return {...state, 
                fetchingData: false,
                album: action.payload
            }

        case KO_ADD:
        case KO_ALBUM:
        case OK_ALBUMS:
        case KO_EDIT:
            return {...state,
                fetchingData: false,
            }

        default : return state
    }
}

export default albumReducer;