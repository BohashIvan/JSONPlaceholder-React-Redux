// GET REMOTE DATA REQUEST
export const GET_REMOTE_DATA_REQUEST = 'GET_REMOTE_DATA_REQUEST';
export const GET_REMOTE_DATA_REQUEST_SUCCESS = 'GET_REMOTE_DATA_REQUEST_SUCCESS';
export const GET_REMOTE_DATA_REQUEST_FAILURE = 'GET_REMOTE_DATA_REQUEST_FAILURE';

// GET REMOTE ITEM REQUEST
export const GET_REMOTE_ITEM_REQUEST = 'GET_REMOTE_ITEM_REQUEST';
export const GET_REMOTE_ITEM_REQUEST_SUCCESS = 'GET_REMOTE_ITEM_REQUEST_SUCCESS';
export const GET_REMOTE_ITEM_REQUEST_FAILURE = 'GET_REMOTE_ITEM_REQUEST_FAILURE';

// ADD TODO ITEM REQUEST
export const ADD_TODO_ITEM_REQUEST = 'ADD_TODO_ITEM_REQUEST';
export const ADD_TODO_ITEM_REQUEST_SUCCESS = 'ADD_TODO_ITEM_REQUEST_SUCCESS';
export const ADD_TODO_ITEM_REQUEST_FAILURE = 'ADD_TODO_ITEM_REQUEST_FAILURE';

export const GET_PARAMS_ID = 'GET_PARAMS_ID';
export const CHANGE_CHECKBOX_VALUE = 'CHANGE_CHECKBOX_VALUE';

export const UPDATE_TODO_TITLE_REQUEST = 'UPDATE_TODO_TITLE_REQUEST';
export const UPDATE_TODO_TITLE_REQUEST_SUCCESS = 'UPDATE_TODO_TITLE_REQUEST__SUCCESS';
export const UPDATE_TODO_TITLE_REQUEST_FAILURE = 'UPDATE_TODO_TITLE_REQUEST_FAILURE';

export const DELETE_TODO_ITEM_REQUEST = 'DELETE_TODO_ITEM_REQUEST';
export const DELETE_TODO_ITEM_REQUEST_SUCCESS = 'DELETE_TODO_ITEM_REQUEST_SUCCESS';
export const DELETE_TODO_ITEM_REQUEST_FAILURE = 'DELETE_TODO_ITEM_REQUEST_FAILURE';

// ADD TODO ITEM
export const addTodoItemActionRequest = () => ({
		type: ADD_TODO_ITEM_REQUEST,
});

export const addTodoItemActionRequestSuccess = (payload) => ({
	type: ADD_TODO_ITEM_REQUEST_SUCCESS,
	payload
});

export const addTodoItemActionRequestFailure = (payload) => ({
	type: ADD_TODO_ITEM_REQUEST_FAILURE,
	payload
});

// CHANGE COMPLETED
export const changeCheckboxValueAction = (payload) => {
	return {
		type: CHANGE_CHECKBOX_VALUE,
		payload
	};
};

// UPDATE TODO TITLE
export const updateTodoTitleActionRequest = (payload) => {
	return {
		type: UPDATE_TODO_TITLE_REQUEST,
		payload
	};
};

export const updateTodoTitleActionSuccess = (payload) => {
	return {
		type: UPDATE_TODO_TITLE_REQUEST_SUCCESS,
		payload
	};
};

export const updateTodoTitleActionFailure = (payload) => {
	return {
		type: UPDATE_TODO_TITLE_REQUEST_FAILURE,
		payload
	};
};

//DELETE TODO ITEM
export const deleteTodoItemActionRequest = () => ({
		type: DELETE_TODO_ITEM_REQUEST
	})

export const deleteTodoItemActionSuccess = (payload) => ({
		type: DELETE_TODO_ITEM_REQUEST_SUCCESS,
		payload
	});

export const deleteTodoItemActionFailure = (payload) => ({
		type: DELETE_TODO_ITEM_REQUEST_FAILURE,
		payload
	});

// GET REMOTE DATA ACTIONS
export const getRemoteDataActionRequest = () => {
	return {
		type: GET_REMOTE_DATA_REQUEST
	};
};

export const getRemoteDataActionRequestSuccess = (payload) => {
	return {
		type: GET_REMOTE_DATA_REQUEST_SUCCESS,
		payload
	};
};

export const getRemoteDataActionRequestFailure = (payload) => {
	return {
		type: GET_REMOTE_DATA_REQUEST_FAILURE,
		payload
	};
};

// GET REMOTE ITEM ACTIONS
export const getRemoteItemActionRequest = () => {
	return {
		type: GET_REMOTE_ITEM_REQUEST
	};
};

export const getRemoteItemActionRequestSuccess = (payload) => {
	return {
		type: GET_REMOTE_ITEM_REQUEST_SUCCESS,
		payload
	};
};

export const getRemoteItemActionRequestFailure = (payload) => {
	return {
		type: GET_REMOTE_ITEM_REQUEST_FAILURE,
		payload
	};
};
