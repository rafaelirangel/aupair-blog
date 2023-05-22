import {
    CREATE_USER_ERROR,
    CREATE_USER_SUBMITTED,
    CREATE_USER_SUCCESS
} from '../actions/types';

// define the initial state of the signup store
const initialState = {
    usernameError: "",
    passwordError: "",
    isSubmitted: false
};

// define how action will change the state of the store
// There is a big switch statement in the signupReducer with separate case for each action type.Each action type defines its own way how to change the selected state of the application
export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_SUBMITTED:
            return {
                usernameError: ' ',
                passwordError: ' ',
                isSubmitted: true
            };

        case CREATE_USER_ERROR:
            const errorState = {
                usernameError: ' ',
                passwordError: ' ',
                isSubmitted: false
            };
            if (action.errorData.hasOwnProperty("username")) {
                errorState.usernameError = action.errorData["username"];
            }
            if (action.errorData.hasOwnProperty("password")) {
                errorState.passwordError = action.errorData["password"];
            }
            return errorState;

        case CREATE_USER_SUCCESS:
            return {
                usernameError: ' ',
                passwordError: ' ',
                isSubmitted: false
            }

        default:
            return state;
    }
}


// // import needed actions
// import {
//     CREATE_USER_ERROR,
//     CREATE_USER_SUBMITTED,
//     CREATE_USER_SUCCESS
// } from "../actions/types";

// // define the initial state of the signup store
// const initialState = {
//     usernameError: "",
//     passwordError: "",
//     isSubimtted: false
// };

// // define how action will change the state of the store
// export const signupReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CREATE_USER_SUBMITTED:
//             return {
//                 usernameError: "",
//                 passwordError: "",
//                 isSubimtted: true
//             };
//         case CREATE_USER_ERROR:
//             const errorState = {
//                 usernameError: "",
//                 passwordError: "",
//                 isSubimtted: false
//             };
//             if (action.errorData.hasOwnProperty("username")) {
//                 errorState.usernameError = action.errorData["username"];
//             }
//             if (action.errorData.hasOwnProperty("password")) {
//                 errorState.passwordError = action.errorData["password"];
//             }
//             return errorState;
//         case CREATE_USER_SUCCESS:
//             return {
//                 usernameError: "",
//                 passwordError: "",
//                 isSubimtted: false
//             };
//         default:
//             return state;
//     }
// }
