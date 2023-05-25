import{
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_CURRENT_USER_FAIL,
    SET_CURRENT_USER_SUCCESS,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS
} from '../actions/types';


const initialState = {
    access: localStorage.getItem('access'), //check to see if there is an access token
    refresh: localStorage.getItem('refresh'), 
    isAuthenticated: null,
    user: null
}

export const loginReducer = (state = initialState, action) => {
    //destructuring action
    const {type, payload} = action

    switch(type){
        case AUTHENTICATED_SUCCESS:
            
            return{
                ...state,
                isAuthenticated: true
            }
            
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return{
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }

        case SIGNUP_SUCCESS:
            return{
                ...state,
                isAuthenticated: false
            }    

        case SET_CURRENT_USER_SUCCESS:
            return{
                ...state,
                user: payload
            }
            

        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }

        case SET_CURRENT_USER_FAIL:
            return{
                ...state,
                user: null
            }    



        case LOGIN_FAIL:
        case LOGOUT:    
        case SIGNUP_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }   
            
        default:
            return state    
    }
}

