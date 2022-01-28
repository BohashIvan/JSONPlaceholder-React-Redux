import {useEffect, useState } from 'react';
import {Spin, Button, Popconfirm, message} from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRemoteData, deleteTodoItem } from '../redux/thunk/todos.thunk';
import {changeCheckboxValueAction} from '../redux/actions/todos.action';

import AddTodo from './AddTodo';

const TodosList = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.todosReducer.loading);
	const data = useSelector((state) => state.todosReducer.data);
	const error = useSelector((state) => state.todosReducer.error);

	useEffect(() => {
		if (!data) {
			dispatch(getRemoteData());
		}
	}, [data]);

	useState(() => {
		if (error) {
			message.error(error);
		}
	}, [error]);

	const handleCheckboxValue = (id) => dispatch(changeCheckboxValueAction(id));

	const handleDelete = (id) => dispatch(deleteTodoItem(id));

	return (
		<Spin spinning={loading} tip='Loading todos data ...'>
			<div className="todos-list-container">
				<AddTodo />
				<ul className="list-group todos-list">
					{data
						? data.map((todo) => {
							return (
								<div className="d-flex bd-highlight list-group-item mb-1 border" key={todo.id}>
									<div className="me-auto bd-highlight">
										<Link className="text-decoration-none" to={`/details/${todo.id}`}>
											<li>{todo.title}</li>
										</Link>
									</div>
									<div className="bd-highlight">
										<input
											onChange={() => handleCheckboxValue(todo.id)}
											type="checkbox"
											checked={todo.completed}
											className="form-check-input me-2"
										/>
									</div>
									<div className="bd-highlight">
										<Popconfirm
											title="Are you sure to delete this todo?"
											onConfirm={() => handleDelete(todo.id)}
											okText="Yes"
											cancelText="No"
										>
										<Button danger>
											Delete
										</Button>
										</Popconfirm>
									</div>
								</div>
							);
						})
						: null}
				</ul>
			</div>
		</Spin>
	);
};

export default TodosList;
