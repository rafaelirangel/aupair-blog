import{
    SET_TOKEN,
    SET_CURRENT_USER,
    UNSET_CURRENT_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_CURRENT_USER_FAIL,
    SET_CURRENT_USER_SUCCESS,
} from '../actions/types';


const initialState = {
    access: localStorage.getItem('access'), //check to see if there is an access token
    refresh: localStorage.getItem('refresh'), 
    isAuthenticaded: null,
    user: null
}

export const loginReducer = (state = initialState, action) => {
    //destructuring action
    const {type, payload} = action

    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return{
                ...state,
                isAuthenticaded: true,
                access: payload.access,
                refresh: payload.refresh
            }

        case SET_CURRENT_USER_SUCCESS:
            return{
                ...state,
                user: payload
            }
            
        case SET_CURRENT_USER_FAIL:
            return{
                ...state,
                user: null
            }    

        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access: null,
                refresh: null,
                isAuthenticaded: false,
                user: null
            }   
            
        default:
            return state    
    }
}

