import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Spin, message} from "antd";
import { useParams, useNavigate } from 'react-router-dom';
import { getRemoteItem } from '../redux/thunk/todos.thunk';
import UpdateTodo from './UpdateTodo';

const TodoItem = () => {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.todoReducer.loading);
	const todo = useSelector((state) => state.todoReducer.todo);
	const error = useSelector((state) => state.todoReducer.error);

	useEffect(() => {
		dispatch(getRemoteItem(params.id));
	}, [params.id]);

	useEffect(() => {
		if (error) {
			message.error(error);
		}
	}, [error]);

	return (
		<Spin spinning={loading} tip='Loading todo details ...'>
			<div className="todo-card card">
				<div className="card-header">
					<h2>{todo?.title}</h2>
				</div>
				<div className="card-body">
					<p>UserId: {todo?.userId}</p>
					<p>Id: {todo?.id}</p>
					<p>Completed: {`${todo?.completed}`}</p>
				</div>
				<div className="card-footer">
					{todo?.title && <UpdateTodo id={todo?.id} title={todo?.title} />}
				</div>
				<Button type='link' onClick={() => navigate('/')}>Back</Button>
			</div>
		</Spin>
	);
};

export default TodoItem;
