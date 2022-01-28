import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { todosReducer } from './reducers/todos.reducer';
import {todoReducer} from "./reducers/todo.reducer";

const logger = createLogger({
	collapsed: true
});

export const store = createStore(
	combineReducers({
		todosReducer,
		todoReducer
	}),
	applyMiddleware(thunk, logger)
);
