import {
    GET_REMOTE_ITEM_REQUEST,
    GET_REMOTE_ITEM_REQUEST_FAILURE,
    GET_REMOTE_ITEM_REQUEST_SUCCESS,
    UPDATE_TODO_TITLE_REQUEST,
    UPDATE_TODO_TITLE_REQUEST_FAILURE,
    UPDATE_TODO_TITLE_REQUEST_SUCCESS
} from "../actions/todos.action";

const initialState = {
    loading: false,
    todo: null,
    error: null
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REMOTE_ITEM_REQUEST:
        case UPDATE_TODO_TITLE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_REMOTE_ITEM_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                todo: action.payload
            };

        case UPDATE_TODO_TITLE_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                todo: {
                    ...state.todo,
                    title: action.payload.body.title
                }
            };

        case GET_REMOTE_ITEM_REQUEST_FAILURE:
        case UPDATE_TODO_TITLE_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};
