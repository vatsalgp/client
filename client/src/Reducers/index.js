import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

const mapKeys = arr => {
    const op = {};
    for (const e of arr) {
        op[e.id] = e;
    }
    return op;
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return { ...INITIAL_STATE, isSignedIn: true, userId: action.payload };
        case "SIGN_OUT":
            return { ...INITIAL_STATE, isSignedIn: false, userId: null };
        default:
            return state;
    }
};

const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_STREAM":
        case "CREATE_STREAM":
        case "EDIT_STREAM":
            return { ...state, [action.payload.id]: action.payload };
        case "DELETE_STREAM":
            delete state[action.payload];
            return { ...state };
        case "FETCH_STREAMS":
            return { ...state, ...mapKeys(action.payload) };
        default:
            return state;
    }
};

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});