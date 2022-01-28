import axios from 'axios';
import { BASE_URL } from '../../api/constants';

export const getRemoteDataRequest = () =>
	axios
		.get(`${BASE_URL}todos`)
		.then((response) => response.data)
		.catch((error) => {
			throw new Error(error);
		});

export const getRemoteItemRequest = (paramsId) =>
	axios
		.get(`${BASE_URL}todos/${paramsId}`)
		.then((response) => response.data)
		.catch((error) => {
			throw new Error(error);
		});

export const createTodoItemRequest = (title) =>
	axios
		.post(`${BASE_URL}todos`, {
			title,
			body: 'body',
		})
		.then((response) => response.data)
		.catch((error) => {
			throw new Error(error);
		});


export const updateTodoTitleRequest = (id, title) => 
	axios
		.put(`${BASE_URL}todos/${id}`, {
			body: {
				title
			}
		})
		.then((response) => response.data)
		.catch((error) => {
			throw new Error(error);
		});

export const deleteTodoItemRequest = (id) => 
	axios.delete(`${BASE_URL}todos/${id}`)
		.then((response) => response.data)
		.catch((error) => {
			throw new Error(error);
		});

