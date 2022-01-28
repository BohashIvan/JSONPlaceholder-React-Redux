import {
	GET_REMOTE_DATA_REQUEST,
	GET_REMOTE_DATA_REQUEST_SUCCESS,
	GET_REMOTE_DATA_REQUEST_FAILURE,
	ADD_TODO_ITEM_REQUEST,
	ADD_TODO_ITEM_REQUEST_SUCCESS,
	ADD_TODO_ITEM_REQUEST_FAILURE,
	CHANGE_CHECKBOX_VALUE,
	DELETE_TODO_ITEM_REQUEST,
	DELETE_TODO_ITEM_REQUEST_SUCCESS,
	DELETE_TODO_ITEM_REQUEST_FAILURE
} from '../actions/todos.action';

const initialState = {
	loading: false,
	data: null,
	error: null
};

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_REMOTE_DATA_REQUEST:
		case ADD_TODO_ITEM_REQUEST:	
		case DELETE_TODO_ITEM_REQUEST:	
			return {
				...state,
				loading: true,
				error: null
			};

		case GET_REMOTE_DATA_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload
			};

		case ADD_TODO_ITEM_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				data: [action.payload, ...state.data]
			};

		case DELETE_TODO_ITEM_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				data: state.data.filter(todo => todo.id !== action.payload),
			};

		case CHANGE_CHECKBOX_VALUE:
			return {
				...state,
				data: state.data.map((todo) =>
					todo.id === action.payload
						? {...todo, completed: !todo.completed}
						: todo
				)
			};

		case DELETE_TODO_ITEM_REQUEST_FAILURE:
		case ADD_TODO_ITEM_REQUEST_FAILURE:	
		case GET_REMOTE_DATA_REQUEST_FAILURE:
			return {
				...state,
				loading: false,
				error: null
			};

		default:
			return state;
	}
};
