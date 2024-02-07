import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SET_USER_DATA } from './actions';

const initialState = {
    token: null,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
                user: null,
            };
        case SET_USER_DATA:
            return {
                ...state,
                ALLuserData: action.payload,
              };
        default:
            return state;
    }
};

const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ALLuserData: action.payload,
              };
        default:
            return state;
    }
};

export { authReducer, userListReducer };