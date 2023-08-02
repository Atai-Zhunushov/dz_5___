import { types } from "../types";

const initialState = {
    users: [],
    error: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: null,
            };
        case types.GET_USERS_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default usersReducer;