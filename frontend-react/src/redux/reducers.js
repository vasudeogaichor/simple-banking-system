import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actions';

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
        default:
            return state;
    }
};

export { authReducer };