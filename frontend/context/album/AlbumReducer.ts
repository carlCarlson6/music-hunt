import { ADD_ALBUM, OK_ADD } from "../../common/types/AlbumTypes";

const albumReducer = (state, action) => {
    switch(action.type) {
        case ADD_ALBUM:
            return {...state, fetchingData: true};
        
        case OK_ADD:
            return {...state, 
                fetchingData: false,
                
            }
        
        default : return state
    }
}

export default albumReducer;