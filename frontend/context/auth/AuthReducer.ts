import {OK_LOGIN, KO_LOGIN, GET_USER, OK_SIGNUP, KO_SIGNUP, CLOSE_SESSION, FETCH_USER} from '../../common/types/AuthTypes';

const authReducer = (state, action) => {
    switch(action.type) {
        case FETCH_USER: 
            return { ...state,
                fetchingUser: true
            }
        
        case OK_LOGIN:
        case OK_SIGNUP:
        case GET_USER:
            return { ...state, 
                user:{email: action.payload.email, id: action.payload.id},
                fetchingUser: false
            };
        
        case CLOSE_SESSION:
        case KO_LOGIN:
        case KO_SIGNUP:
            return { ...state, 
                user:{email: null, id: null},
                fetchingUser: false
            };


        default: return state;
    }
}

export default authReducer;