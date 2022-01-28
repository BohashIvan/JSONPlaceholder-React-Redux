import {
	getRemoteDataActionRequest,
	getRemoteDataActionRequestSuccess,
	getRemoteDataActionRequestFailure,
	getRemoteItemActionRequest,
	getRemoteItemActionRequestSuccess,
	getRemoteItemActionRequestFailure,
	addTodoItemActionRequest,
	addTodoItemActionRequestSuccess,
	addTodoItemActionRequestFailure,
	deleteTodoItemActionRequest,
	deleteTodoItemActionSuccess,
	updateTodoTitleActionRequest,
	updateTodoTitleActionSuccess,
	updateTodoTitleActionFailure, deleteTodoItemActionFailure
} from '../actions/todos.action';

import {
	getRemoteDataRequest,
	getRemoteItemRequest,
	createTodoItemRequest,
	updateTodoTitleRequest,
	deleteTodoItemRequest
} from '../requests/todos.request';

export const getRemoteData = () => (dispatch) => {
	dispatch(getRemoteDataActionRequest());
	return getRemoteDataRequest()
		.then((response) => dispatch(getRemoteDataActionRequestSuccess(response)))
		.catch((error) => {
			dispatch(getRemoteDataActionRequestFailure(error));
		});
};

// getRemoteItemRequest
export const getRemoteItem = (id) => (dispatch) => {
	dispatch(getRemoteItemActionRequest());
	return getRemoteItemRequest(id)
		.then((response) => dispatch(getRemoteItemActionRequestSuccess(response)))
		.catch((error) => {
			dispatch(getRemoteItemActionRequestFailure(error));
		});
};

export const addTodoItem = (title) => (dispatch) => {
	dispatch(addTodoItemActionRequest());
	return createTodoItemRequest(title)
		.then((response) => dispatch(addTodoItemActionRequestSuccess(response)))
		.catch((error) => dispatch(addTodoItemActionRequestFailure(error)));
};

export const updateTodoTitle = (id, title) => (dispatch) => {
	dispatch(updateTodoTitleActionRequest())
	return updateTodoTitleRequest(id, title)
		.then((response) => dispatch(updateTodoTitleActionSuccess(response)))
		.catch((error) => dispatch(updateTodoTitleActionFailure(error)));
};

export const deleteTodoItem = (id) => (dispatch) => {
	dispatch(deleteTodoItemActionRequest());
	return deleteTodoItemRequest(id)
		.then(() => dispatch(deleteTodoItemActionSuccess(id)))
		.catch((error) => dispatch(deleteTodoItemActionFailure(error)));
};
