import {OK_LOGIN, KO_LOGIN, GET_USER, OK_SIGNUP, KO_SIGNUP, CLOSE_SESSION} from '../../common/types/AuthTypes';

const authReducer = (state, action) => {
    switch(action.type) {
        case OK_LOGIN:
        case OK_SIGNUP:  
            return { ...state, email: action.payload.email, id: action.payload.id};
        
        case GET_USER:
            return { ...state, email: action.payload.email, id: action.payload.id }        
        
        //case CLOSE_SESSION:
        //case KO_LOGIN:
        //case KO_SIGNUP:
        //    return { ...state, token: null, message: action.payload, authenticated: false, user: null, loading: false }


        default: return state;
    }
}

export default authReducer;